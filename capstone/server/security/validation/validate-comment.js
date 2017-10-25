// validateComment

module.exports = (comment) => {
    return typeof comment === 'string' && comment.length > 0
}
