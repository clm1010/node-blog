/**
 * @description 基本模型
 * @author CLM
 */
class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

/**
 * @description 成功模型
 * @author CLM
 */
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = 0
  }
}

/**
 * @description 失败模型
 * @author CLM
 */
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
