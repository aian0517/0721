
$(window).scroll(() => {
    const nowscroll = $(document).scrollTop()
    // console.log(nowscroll);
    if (nowscroll) {
        $('nav').css('background-color', '#fff')
        $('.navbar-brand>img').css('filter', 'brightness(1)')
        $('.nav-link').addClass('text-dark')
    } else {
        $('nav').css('background-color', 'transparent')
        $('.nav-link').removeClass('text-dark')
        $('.navbar-brand>img').css('filter', 'brightness(5)')
    }
})



const items = ['新聞發布', '投資者關係新聞', '娛樂新聞', '公司新聞']
const main = {
    '新聞發布': [
        {
            data: '2023.07.18',
            stst: '國民極樂',
            content: '國道出現一位可愛小狗狗'
        },
        {
            data: '2023.07.02',
            stst: '國民極樂',
            content: '一位可愛小狗狗出現國道'
        },
        {
            data: '2023.06.23',
            stst: '國民極樂',
            content: '一事在我們的體內'
        },
        {
            data: '2023.06.15',
            stst: '國民極樂',
            content: '時光代理人將2024年來台合作'
        },
        {
            data: '2023.06.01',
            stst: '國民極樂',
            content: '我推倒的孩子將於2024年5月13日出第二季'
        },
    ],
    '投資者關係新聞': [
        {
            data: '2023.07.12',
            stst: '錢錢的世界',
            content: '本公司2023年6月財務報表'
        },
        {
            data: '2023.07.06',
            stst: '錢錢的世界',
            content: '本公司2023年6月資產負債表'
        },
        {
            data: '2023.06.27',
            stst: '錢錢的世界',
            content: '本公司2023年5月財務報表'
        },
        {
            data: '2023.06.13',
            stst: '錢錢的世界',
            content: '本公司2023年5月資產負債報表'
        },
        {
            data: '2023.03.12',
            stst: '錢錢的世界',
            content: '本公司2023年8月2日將召開董事長會議'
        },
    ],
    '娛樂新聞': [
        {
            data: '2023.06.24',
            stst: '歡樂無限',
            content: '全家冰品第二件六折起'
        },
        {
            data: '2023.06.06',
            stst: '歡樂無限',
            content: '全家飲料第二件六折起最高0元帶回家'
        },
        {
            data: '2023.05.27',
            stst: '歡樂無限',
            content: '全聯端午肉粽開賣囉~'
        },
        {
            data: '2023.04.13',
            stst: '歡樂無限',
            content: '清明時節雨紛紛'
        },
        {
            data: '2023.03.11',
            stst: '歡樂無限',
            content: '大圓百百貨周年慶全館滿而折抵'
        },
    ],
    '公司新聞': [
        {
            data: '2022.12.03',
            stst: '司產憐聯',
            content: 'xx公司驚傳不平等對待'
        },
        {
            data: '2022.09.09',
            stst: '司產憐聯',
            content: 'xx公司涉嫌賣過期食品給民眾'
        },
        {
            data: '2022.03.22',
            stst: '司產憐聯',
            content: 'xx公司嘞所員工'
        },
        {
            data: '2022.01.11',
            stst: '司產憐聯',
            content: 'xx公司宣布要破產'
        },
        {
            data: '2022.01.01',
            stst: '司產憐聯',
            content: 'xx公司宣布要巨型年度盛大晚會'
        },
    ],
}

let clickitem = '新聞發布'

function aaa() {
    $('.lnf').html('')
    $('.lnf-main').html('')

    $.each(items, (index, item) => {

        $('.lnf').append(`
        <li id="${item}" class="lnf-li mb-lg-5 mb-3 py-2 px-5 ${item === clickitem ? 'lnf-active' : ''}" onclick="lnf_click(event)">${item}</li>
        `)
    })
    $.each(main[clickitem], (index, item) => {
        $('.lnf-main').append(`
        <section class="row p-3 ">
            <div class="col-lg-12 d-flex  align-items-center flex-lg-row flex-column lnf-main-content">    
                <div class="col-lg-4 d-flex justify-content-around align-items-center me-lg-3 mb-3 mb-lg-0">${item.data} <span class="lnf-main-title2 mx-5 mx-lg-0">${item.stst}</span></div>
                <div class="col-lg-8  fw-bold d-flex justify-content-between pe-3">
                    ${item.content}
                    <span>-></span>
                </div>
            </div>
        </section>
        <hr>
        `)
    })
}
function lnf_click(e) {
    clickitem = e.target.id
    aaa()
}
aaa()


$('.robot').click(() => {
    $('.robot-box').toggleClass('robot-click')
})
$('.robot-xx').click(() => {
    $('.robot-box').removeClass('robot-click')
})

const ANS = {
    '您好': '您好我是送貨小幫手，有問題都可以找我',
    '我要應徵送貨員': '好的~我們將通知相關人員',
}

$('.robot-submit').click(() => {
    if ($('.robot-input').val() === '') {
        return
    }
    const robot_input = $('.robot-input')
    const robot_val = robot_input.val().toLowerCase()

    $('.robot-body').append(`
    <p class="d-flex justify-content-end">
        <span class="robot-text2">${robot_input.val()}</span>
    </p>
    `)
    robot_input.val('')

    let ans = '您好~感謝您問問題,我們將通報網頁助手回復您'
    const x = Object.keys(ANS).filter(k => robot_val.includes(k.toLowerCase()))
    if (x.length > 0) {
        ans = ANS[x[x.length - 1]]
    }
    setTimeout(() => {

        $('.robot-body').append(`
        <p class="robot-content">
            <span class="robot-text">${ans}</span>
        </p>
        `)
        $('.robot-body').scrollTop(100000000000000000)
    }, 1000);
})
$('.robot-input').on('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        $('.robot-submit').click()
    }
})
const ANS2 = {
    '重要資訊': '以下是我們的重要資訊，拉拉阿拉拉拉拉拉阿',
    '服務資訊': '以下是我們的服務訊息，拉拉阿拉拉拉拉拉阿',
    '招聘資訊': '以下是我們著招聘訊息，拉拉阿拉拉拉拉拉阿',
}
$('.robot-button').click((event) => {
    const text = $(event.target).text()
    $('.robot-body').append(`
    <p class="d-flex justify-content-end">
        <span class="robot-text2">${text}</span>
    </p>
    `)
    let ans = '您好~感謝您問問題,我們將通報網頁助手回復您'
    const x = Object.keys(ANS2).filter(k => text.includes(k.toLowerCase()))
    if (x.length > 0) {
        ans = ANS2[x]
    }
    setTimeout(() => {
        $('.robot-body').append(`
              <p class="robot-content">
                  <span class="robot-text">${ans}</span>
              </p>
              `)
        $('.robot-body').scrollTop(100000000000000000)
    }, 1000);
})

const shop = [
    {
        name: '普通紙箱',
        img: './images/箱子.png',
        text: '大小:20x20',
        price: 20,
        amount: '0'
    },
    {
        name: '中型紙箱',
        img: './images/箱子2.jpg',
        text: '大小:70x70',
        price: 50,
        amount: '0'
    },
    {
        name: '大型紙箱',
        img: './images/箱子3.png',
        text: '大小:150x150',
        price: 100,
        amount: '0'
    },
    {
        name: '大大型紙箱',
        img: './images/箱子4.jpg',
        text: '大小:200x200',
        price: 150,
        amount: '0'
    },
    {
        name: '大大大型紙箱',
        img: './images/箱子5.jpg',
        text: '大小:250x250',
        price: 200,
        amount: '0'
    }
]

$.each(shop, (index, item) => {
    $('.swiper-wrapper').append(`
    <div class="swiper-slide my-3">
        <div class="shop">
            <h1>${item.name}</h1>
            <img src="${item.img}" alt="" class="w-75 my-3">
            <h5>${item.text}</h5>
            <h4>NT$${item.price}元</h4>
            <div class="d-flex">
                <button class="shop-btn out" onclick="add(-1,${index})">-</button>
                <input type="text" class="amount mx-1 text-center" value="${item.amount}">
                <button class="shop-btn in" onclick="add(1,${index})">+</button>
            </div>
        </div>
    </div>
    `)
})

$('.amount').on('input', function() {
    var amount_index = $(this).index('.amount');
    var amount_val = $(this).val().trim();
    var amount_int = parseInt(amount_val); //parseInt數字轉換整數
    if (isNaN(amount_int)) { // isNaN判斷值是否NaN
        amount_int = 0;
    }
    shop[amount_index].amount = amount_int;
    updateList();
});
$('.amount').on('blur', function() {
    var amount_index = $(this).index('.amount');
    var amount_val = $(this).val();
    if (amount_val === '') {
        $('.amount').eq(amount_index).val(0)
        updateList();
    }
});

function add(n, index) {
    shop[index].amount = Math.max(0, shop[index].amount + n)
    if (isNaN(shop[index].amount)) {
        shop[index].amount = 0;
    }
    $('.amount').eq(index).val(shop[index].amount); //eq判斷索引值
    var sum = 0;
    $.each(shop, (index, item) => {
        sum += item.amount * item.price;///p 將字串轉成數字
    });
    $('.shop-manprice').text(sum);
    updateList();
}

$('.shop-item').click(function() {
    $(this).find('.checkout').slideDown();
  });
function updateList() {
    $('.shop2-box').html('')
    var cost = 0
    $.each(shop, (index, shop) => {
        if (shop.amount != 0) {
            cost += shop.amount * shop.price
            $('.shop2-box').append(`
            <div class="shop-item">
                <div class="checkout d-flex border align-items-center mb-2 p-2 rounded">
                    <div class="checkout-imgbox col-3">
                        <img src="${shop.img}" alt="" class="m-auto">
                    </div>
                    <div class="d-flex flex-column mx-2 col-5">
                        <h3 class="">${shop.name}</h3>
                        <div class="d-flex">
                            <h6 class="me-lg-2 me-1">價錢:${shop.price}元</h6>
                            <h6 class="">數量:${shop.amount}個</h6>
                        </div>
                    </div>
                    <div class="col-4">
                        <h4>NT$${shop.amount * shop.price}元</h4>
                    </div>
                </div>
            </div>
            `) 
        }
        $('.shop-manprint').text(cost)
    })
}


$('.shop-submit').click(() => {
    shop.map(x => x.amount = 0)
    $('.amount').val(0)
    $('.shop-manprice').text(0);
    updateList()
});

$('.shop-no').click(() => {
    shop.map(x => x.amount = 0)
    $('.amount').val(0)
    $('.shop-manprice').text(0);
    sum = 0
    updateList()
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween:20,
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});