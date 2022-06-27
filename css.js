// MARGIN
let mb = document.querySelectorAll('[class^="mb-"],[class*=" mb-"]')
let mt = document.querySelectorAll('[class^="mb-"],[class*=" mt-"]')
let ml = document.querySelectorAll('[class^="mb-"],[class*=" ml-"]')
let mr = document.querySelectorAll('[class^="mb-"],[class*=" mr-"]')

mb.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('mb-') == 0)
            data = el.split('-')[1];
    })
    e.style.marginBottom = data + "rem"
})

mt.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('mt-') == 0)
            data = el.split('-')[1];
    })
    e.style.marginTop = data + "rem"
})

ml.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('ml-') == 0)
            data = el.split('-')[1];
    })
    e.style.marginLeft = data + "rem"
})

mr.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('mr-') == 0)
            data = el.split('-')[1];
    })
    e.style.marginRight = data + "rem"
})

// PADDING
let pb = document.querySelectorAll('[class^="pb-"],[class*=" pb-"]')
let pt = document.querySelectorAll('[class^="pt-"],[class*=" pt-"]')
let pl = document.querySelectorAll('[class^="pl-"],[class*=" pl-"]')
let pr = document.querySelectorAll('[class^="pr-"],[class*=" pr-"]')

pb.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('pb-') == 0)
            data = el.split('-')[1];
    })
    e.style.paddingBottom = data + "rem"
})

pt.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('pt-') == 0)
            data = el.split('-')[1];
    })
    e.style.paddingTop = data + "rem"
})

pl.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('pl-') == 0)
            data = el.split('-')[1];
    })
    e.style.paddingLeft = data + "rem"
})

pr.forEach(e => {
    let data = 0
    e.classList.forEach(el => {
        if (el.indexOf('pr-') == 0)
            data = el.split('-')[1];
    })
    e.style.paddingRight = data + "rem"
})