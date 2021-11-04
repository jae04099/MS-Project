
'use strict';

import movieData from './data.js'
const cardWrap = document.querySelector('.tile_wrap');

cardWrap.innerHTML = movieData.map(data => `<article class="card">
<img src="" alt="">
<div class="card_content">
    <div class="image">image</div>
    <h4>${data.title}</h4>
    <ul class="card_info">
        <li class="genre"><span>개요</span>${data.genre}</li>
        <li class="rate"><span>평점</span><i class="fas fa-star"></i>${data.rate}</li>
        <li><span>개봉</span>${data.open}</li>
        <li><span>출연</span>${data.cast}</li>
    </ul>
</div>
<div class="button_wrap">
    <button class="first" type="button">예매하기</button>
    <button class="second" type="button"><i class="far fa-play-circle"></i>예고편</button>
</div>
</article>`).join('')

