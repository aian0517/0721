const items = ['Item1', 'Item2', 'Item3', 'Item4']
const main = {
    'Item1': [
        {
            date: '2023.07.13',
            state: '出錢館',
            content: '『出前館』、大人気TVアニメ『呪術廻戦』とのタイアップキャンペーンを2023年7月より2か月間にわたって開催！！',
        },
        {
            date: '2023.06.13',
            state: '出錢館',
            content: '『出前館』、宮城県・仙台市と「廃棄物の不法投棄の情報提供に関する協定」締結',
        },
        {
            date: '2023.06.13',
            state: '出錢館',
            content: '『出前館』、宮城県・仙台市と「廃棄物の不法投棄の情報提供に関する協定」締結',
        }
    ],
    "Item2": [
        {
            date: '2023.06.05',
            state: '出錢館',
            content: '『出前館』、大阪府で展開している「スーパードラッグシグマ」のデリバリーを開始！',
        },
        {
            id: 'Item3',
            date: '2023.06.06',
            state: '出錢館',
            content: '『出前館』、広島県でコンビニエンスストア「ポプラ」のデリバリーを開始！',
        },
    ],
    "Item3": [
        {
            date: '2021.06.05',
            state: '出錢館',
            content: '『出前館』、大阪府で展開している「スーパードラッグシグマ」のデリバリーを開始！',
        },
    ],
    "Item4": [
        {
            date: '2024.06.05',
            state: '出錢館',
            content: '『出前館』、大阪府で展開している「スーパードラッグシグマ」のデリバリーを開始！',
        },
    ],
}


let currentItem = 'Item1'

function renderList() {
    $(".list-group").html('')
    $('.list-main').html('')
    $.each(items, (index, item) => {
        $(".list-group").append(`
            <li id='${item}' class="list-group-item ${item === currentItem ? 'active' : ''}" onclick='listToggle(event)'>${item}</li>
        `)
    })

    $.each(main[currentItem], (index, item) => {
        $('.list-main').append(`
        <section class="row d-flex align-items-center mx-auto p-3">
            <div class="col-2">${item.date}</div>
            <div class="col-2">${item.state}</div>
            <div class="col-7">${item.content}</div>
            <div class="col-1"><span style="width: 25px;height: 25px;background: #faa;">-></span></div>
        </section>
        <hr>   
        `)
    })

}

function listToggle(e) {
    currentItem = e.target.id
    console.log(currentItem);
    renderList();
}

renderList()