var definer = require('./metainspector.js')

var newDefiner = new definer('https://fuck.com/ehealy/150-roll-widdit?in=ehealy/sets/a-galaxy-with-skin')
newDefiner.getDesc().then(function (final) {
	console.log(final)
})

