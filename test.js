const tap = require('tap')
const prune = require('.')

tap.test('prune', t => {
    t.deepEquals(prune({a:'', b:[], c:{}, bar:42}), {bar:42}, 'prune')
    t.deepEquals(prune.pruneEmptyStrings({a:'', b:[], c:{}, bar:42}), {b:[], c:{}, bar:42}, 'pruneEmptyStrings')
    t.deepEquals(prune({a:null, b:[], c:{}, bar:42}), {bar:42}, 'prune /null')
    t.end()
})

