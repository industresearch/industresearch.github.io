
$(function () {
	searchWord = function(){
		var searchResult,
				searchText = $(this).val(), // 検索ボックスに入力された値
				targetText,
				hitNum;

		// 検索結果を格納するための配列を用意
		searchResult = [];

		// 検索結果エリアの表示を空にする
		$('#search-result__list').empty();
		$('.search-result__hit-num').empty();

		// 検索ボックスに値が入っている場合
		if (searchText != '') {
			$('.target-area section div div article').each(function() {
				targetText = $(this).text();

				// 検索対象となるリストに入力された文字列が存在するかどうかを判断
				if (targetText.indexOf(searchText) != -1) {
					searchResult.push(targetText);
					$(this).removeClass('invisible');
				} else {
					$(this).addClass('invisible');

				}
			});

			// 検索結果をページに出力
			for (var i = 0; i < searchResult.length; i ++) {
				$('<span>').text(searchResult[i]).appendTo('#search-result__list');
			}

			// ヒットの件数をページに出力
			hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
			$('.search-result__hit-num').append(hitNum);

			// card-open
			$('#card-a').addClass('show');
			$('#card-b').addClass('show');
			$('#card-c').addClass('show');
			$('#card-d').addClass('show');
			$('#card-e').addClass('show');
			$('#card-f').addClass('show');
			$('#card-g').addClass('show');
			$('#card-h').addClass('show');
			$('#card-i').addClass('show');
			$('#card-j').addClass('show');
			$('#card-k').addClass('show');
			$('#card-l').addClass('show');
			$('#card-m').addClass('show');
			$('#card-n').addClass('show');
			$('#card-o').addClass('show');
			$('#card-p').addClass('show');
			$('#card-q').addClass('show');
			$('#card-r').addClass('show');
			$('#card-s').addClass('show');
			$('#card-t').addClass('show');
			$('#card-u').addClass('show');
			$('#card-v').addClass('show');
			$('#card-w').addClass('show');
			$('#card-x').addClass('show');
			$('#card-y').addClass('show');
			$('#card-z').addClass('show');
			$('#card-etc').addClass('show');
			$('#card_a').addClass('show');
			$('#card_i').addClass('show');
			$('#card_u').addClass('show');
			$('#card_e').addClass('show');
			$('#card_o').addClass('show');
			$('#card_ka').addClass('show');
			$('#card_ki').addClass('show');
			$('#card_ku').addClass('show');
			$('#card_ke').addClass('show');
			$('#card_ko').addClass('show');
			$('#card_sa').addClass('show');
			$('#card_si').addClass('show');
			$('#card_su').addClass('show');
			$('#card_se').addClass('show');
			$('#card_so').addClass('show');
			$('#card_ta').addClass('show');
			$('#card_ti').addClass('show');
			$('#card_tu').addClass('show');
			$('#card_te').addClass('show');
			$('#card_to').addClass('show');
			$('#card_na').addClass('show');
			$('#card_ni').addClass('show');
			$('#card_nu').addClass('show');
			$('#card_ne').addClass('show');
			$('#card_no').addClass('show');
			$('#card_ha').addClass('show');
			$('#card_hi').addClass('show');
			$('#card_hu').addClass('show');
			$('#card_he').addClass('show');
			$('#card_ho').addClass('show');
			$('#card_ma').addClass('show');
			$('#card_mi').addClass('show');
			$('#card_mu').addClass('show');
			$('#card_me').addClass('show');
			$('#card_mo').addClass('show');
			$('#card_ya').addClass('show');
			$('#card_yu').addClass('show');
			$('#card_yo').addClass('show');
			$('#card_ra').addClass('show');
			$('#card_ri').addClass('show');
			$('#card_ru').addClass('show');
			$('#card_re').addClass('show');
			$('#card_ro').addClass('show');
			$('#card_wa').addClass('show');
			$('#card_official').addClass('show');

		} else {
			$('.target-area section div div article').removeClass('invisible');

			$('#card-a').removeClass('show');
			$('#card-b').removeClass('show');
			$('#card-c').removeClass('show');
			$('#card-d').removeClass('show');
			$('#card-e').removeClass('show');
			$('#card-f').removeClass('show');
			$('#card-g').removeClass('show');
			$('#card-h').removeClass('show');
			$('#card-i').removeClass('show');
			$('#card-j').removeClass('show');
			$('#card-k').removeClass('show');
			$('#card-l').removeClass('show');
			$('#card-m').removeClass('show');
			$('#card-n').removeClass('show');
			$('#card-o').removeClass('show');
			$('#card-p').removeClass('show');
			$('#card-q').removeClass('show');
			$('#card-r').removeClass('show');
			$('#card-s').removeClass('show');
			$('#card-t').removeClass('show');
			$('#card-u').removeClass('show');
			$('#card-v').removeClass('show');
			$('#card-w').removeClass('show');
			$('#card-x').removeClass('show');
			$('#card-y').removeClass('show');
			$('#card-z').removeClass('show');
			$('#card-etc').removeClass('show');
			$('#card_a').removeClass('show');
			$('#card_i').removeClass('show');
			$('#card_u').removeClass('show');
			$('#card_e').removeClass('show');
			$('#card_o').removeClass('show');
			$('#card_ka').removeClass('show');
			$('#card_ki').removeClass('show');
			$('#card_ku').removeClass('show');
			$('#card_ke').removeClass('show');
			$('#card_ko').removeClass('show');
			$('#card_sa').removeClass('show');
			$('#card_si').removeClass('show');
			$('#card_su').removeClass('show');
			$('#card_se').removeClass('show');
			$('#card_so').removeClass('show');
			$('#card_ta').removeClass('show');
			$('#card_ti').removeClass('show');
			$('#card_tu').removeClass('show');
			$('#card_te').removeClass('show');
			$('#card_to').removeClass('show');
			$('#card_na').removeClass('show');
			$('#card_ni').removeClass('show');
			$('#card_nu').removeClass('show');
			$('#card_ne').removeClass('show');
			$('#card_no').removeClass('show');
			$('#card_ha').removeClass('show');
			$('#card_hi').removeClass('show');
			$('#card_hu').removeClass('show');
			$('#card_he').removeClass('show');
			$('#card_ho').removeClass('show');
			$('#card_ma').removeClass('show');
			$('#card_mi').removeClass('show');
			$('#card_mu').removeClass('show');
			$('#card_me').removeClass('show');
			$('#card_mo').removeClass('show');
			$('#card_ya').removeClass('show');
			$('#card_yu').removeClass('show');
			$('#card_yo').removeClass('show');
			$('#card_ra').removeClass('show');
			$('#card_ri').removeClass('show');
			$('#card_ru').removeClass('show');
			$('#card_re').removeClass('show');
			$('#card_ro').removeClass('show');
			$('#card_wa').removeClass('show');
			$('#card_official').removeClass('show');
		}
	};

	// searchWordの実行
	$('#search-text').on('input', searchWord);
});
