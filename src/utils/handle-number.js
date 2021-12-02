export class NumberPrecision {
  _boundaryCheckingState
  /**
   * @constructor NumberMethods
   * @param flag 是否开启数字越界检查
   */
  constructor(flag = true) {
    this._boundaryCheckingState = flag

    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
    this.mul = this.mul.bind(this)
    this.div = this.div.bind(this)
    this.surp = this.surp.bind(this)
  }
  /**
   * @param num 数字
   * @param precision 精度
   * @returns
   * @description 处理JS小数精度问题
   * @example
   * strip(0.09999999999999998) = 0.1
   * @author Malphite
   */
  strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision))
  }

  /**
   * @param arr 处理的数组 
   * @param operation 使用的方法
   * @returns
   * @description 迭代处理数组
   * @author Malphite
   */
  iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach(num => {
      res = operation(res, num);
    });
    return res;
  }

  /**
   * @param num 小数
   * @returns
   * @description 返回小数的位数(支持科学计数法)
   * @example
   * digitLength(0.02) = 2
   * digitLength(2e-4) = 4
   * @author Malphite
   */
  digitLength(num) {
    const eSplit = num.toString().split(/[eE]/)
    const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0)
    return len > 0 ? len : 0
  }

  /**
   * @param nums 不定数字参数
   * @returns
   * @description 精确加法(支持科学计数法)
   * @example
   * add(0.1 + 0.2) = 0.3
   * add(1e-1, 2e-1) = 0.3
   * @author Malphite
   */
  add(...nums) {
    if (nums.length > 2) {
      return this.iteratorOperation(nums, this.add)
    }
    const [num1, num2] = nums
    // 取最大小数位
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)))
    return (this.mul(num1, baseNum) + this.mul(num2, baseNum)) / baseNum
  }

  /**
   * @param nums 不定数字参数
   * @returns
   * @description 精确减法(支持科学计数法)
   * @example
   * sub(0.3 - 0.1) = 0.2
   * sub(3e-1 - 1e-1) = 0.2
   * @author Malphite
   */
  sub(...nums) {
    if (nums.length > 2) {
      return this.iteratorOperation(nums, this.sub)
    }
    const [num1, num2] = nums
    // 取最大小数位
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)))
    return (this.mul(num1, baseNum) - this.mul(num2, baseNum)) / baseNum
  }

  /**
   * @param nums 不定数字参数
   * @returns
   * @description 精确乘法(支持科学计数法)
   * @example
   * sub(0.2 * 0.1) = 0.02
   * sub(2e-1 * 1e-1) = 0.02
   * @author Malphite
   */
  mul(...nums) {
    if (nums.length > 2) {
      return this.iteratorOperation(nums, this.mul)
    }
    const [num1, num2] = nums
    // 获取小数位数
    const baseNum = this.digitLength(num1) + this.digitLength(num2)
    // 获取整数值
    const leftValue = this.float2Fixed(num1) * this.float2Fixed(num2)
    this.checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum)
  }

  /**
   * @param nums 不定数字参数
   * @returns
   * @description 精确除法(支持科学计数法)
   * @example
   * div(0.04 / 0.2) = 0.2
   * div(4e-2 / 2e-1) = 0.2
   * @author Malphite
   */
  div(...nums) {
    if (nums.length > 2) {
      return this.iteratorOperation(nums, this.div)
    }
    const [num1, num2] = nums
    const num1Changed = this.float2Fixed(num1)
    const num2Changed = this.float2Fixed(num2)
    this.checkBoundary(num1Changed)
    this.checkBoundary(num2Changed)
    const baseNum = this.digitLength(num2) - this.digitLength(num1)
    return this.mul(num1Changed / num2Changed, this.strip(Math.pow(10, baseNum)))
  }

  /**
   * @param nums 不定数字参数
   * @returns
   * @description 精确取余(支持科学计数法)
   * @example
   * surp(1.1, 1) = 0.1
   * surp(11e-1, 1) = 0.1
   * @author Malphite
   */
  surp(...nums) {
    if (nums.length > 2) {
      return this.iteratorOperation(nums, this.surp)
    }
    const [num1, num2] = nums
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)))
    return (this.mul(num1, baseNum) % this.mul(num2, baseNum)) / baseNum
  }

  /**
   * @param num 小数
   * @returns
   * @description 将小数转换为整数(支持科学计数法)
   * @example
   * float2Fixed(2.4) = 24
   * float2Fixed(2.4e-4) = 24
   * @author Malphite
   */
  float2Fixed(num) {
    if (num.toString().indexOf('e') === -1) {
      return Number(num.toString().replace('.', ''))
    }
    const dLen = this.digitLength(num)
    return dLen > 0 ? this.strip(Number(num) * Math.pow(10, dLen)) : Number(num)
  }

  /**
   * @param num 数字
   * @description 检查是否数字是否越界(支持科学计数法)
   * @author Malphite
   */
  checkBoundary(num) {
    if (this._boundaryCheckingState) {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        console.warn(`${num} is beyond boundary when transfer to integer, the results may not be accurate`);
      }
    }
  }
  /**
   * @param num 小数
   * @param ratio 精度
   * @returns
   * @description 四舍五入(支持科学计数法)
   * @example
   * round(1.5555, 2) = 1.56
   * round(15555e-4, 2) = 1.56
   * @author Malphite
   */
  round(num, ratio) {
    const base = Math.pow(10, ratio)
    let result = this.div(Math.round(Math.abs(this.mul(num, base))), base)
    if (num < 0 && result !== 0) {
      result = this.mul(result, -1)
    }
    return result
  }
}

