function mask(selector) {
  function createMask(event) {
    const matrix = '+7 (___) __ __',
    i = 0,
    def = matrix.replace(/\D/ig, ''),
    val = this.value.replace(/\D/ig, '');

    if (def.length >= val.length) {
      val = def
    }
    this.value = matrix.replace(/./ig, function(a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    })
  }
}
export default mask;