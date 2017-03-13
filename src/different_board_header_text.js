class Different_Board_Header_Text {

	static init(){
		this.PLUGIN_ID = "pd_different_board_header_text";
		this.header_texts = [];

		this.setup();

		if(this.header_texts.length > 0){
			let board = pb.data("page").board;

			if(board && board.id){
				for(let i = 0, l = this.header_texts.length; i < l; ++ i){
					let boards = this.header_texts[i].boards;

					if($.inArrayLoose(board.id, boards) > -1){
						let $logo = $("#logo");

						if(this.header_texts[i].replace_current){
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

	static setup(){
		let plugin = pb.plugin.get(this.PLUGIN_ID);

		if(plugin && plugin.settings){
			let plugin_settings = plugin.settings;

			this.header_texts = plugin_settings.header_texts;
		}
	}

}