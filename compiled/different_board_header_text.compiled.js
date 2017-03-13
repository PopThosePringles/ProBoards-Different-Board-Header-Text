"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Different_Board_Header_Text = function () {
	function Different_Board_Header_Text() {
		_classCallCheck(this, Different_Board_Header_Text);
	}

	_createClass(Different_Board_Header_Text, null, [{
		key: "init",
		value: function init() {
			this.PLUGIN_ID = "pd_different_board_header_text";
			this.header_texts = [];

			this.setup();

			if (this.header_texts.length > 0) {
				var board = pb.data("page").board;

				if (board && board.id) {
					for (var i = 0, l = this.header_texts.length; i < l; ++i) {
						var boards = this.header_texts[i].boards;

						if ($.inArrayLoose(board.id, boards) > -1) {
							var $logo = $("#logo");

							if (this.header_texts[i].replace_current) {
								$logo.html(pb.text.nl2br(this.header_texts[i].text_html));
							} else {
								$logo.append(pb.text.nl2br(this.header_texts[i].text_html));
							}

							break;
						}
					}
				}
			}
		}
	}, {
		key: "setup",
		value: function setup() {
			var plugin = pb.plugin.get(this.PLUGIN_ID);

			if (plugin && plugin.settings) {
				var plugin_settings = plugin.settings;

				this.header_texts = plugin_settings.header_texts;
			}
		}
	}]);

	return Different_Board_Header_Text;
}();


Different_Board_Header_Text.init();