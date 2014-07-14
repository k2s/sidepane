var profile = (function () {
	var testResourceRe = /^sidepane\/tests\//,

		copyOnly = function (filename, mid) {
			var list = {
				'sidepane/package': 1,
				'sidepane/package.json': 1,
				'sidepane/tests': 1,
				'sidepane/test': 1
			};
			return (mid in list) ||
				(/^sidepane\/resources\//.test(mid) && !/\.css$/.test(filename)) ||
				/(png|jpg|jpeg|gif|tiff)$/.test(filename);
		};

	return {
		resourceTags: {
			test: function (filename, mid) {
				return testResourceRe.test(mid);
			},

			copyOnly: function (filename, mid) {
				return copyOnly(filename, mid);
			},

			amd: function (filename, mid) {
				return !testResourceRe.test(mid) && !copyOnly(filename, mid) && /\.js$/.test(filename);
			}
		}
	};
})();
