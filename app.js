window.onload = () => {
  const battmanTitle = document.querySelector('#battman-title')
  const ecommerceTitle = document.querySelector('#ecommerce-title')
  const nftTitle = document.querySelector('#nft-title')
  const baseTitle = document.querySelector('#base-title')
  const sunnysideTitle = document.querySelector('#sunnyside-title')

  const battmanScreenshot = document.querySelector('#battman-screenshot')
  const ecommerceScreenshot = document.querySelector('#ecommerce-screenshot')
  const nftScreenshot = document.querySelector('#nft-screenshot')
  const baseScreenshot = document.querySelector('#base-screenshot')
  const sunnysideScreenshot = document.querySelector('#sunnyside-screenshot')

  battmanTitle.addEventListener('mouseover', () => {
    battmanScreenshot.classList.remove('none')
  })
  battmanTitle.addEventListener('mouseleave', () => {
    battmanScreenshot.classList.add('none')
  })

  ecommerceTitle.addEventListener('mouseover', () => {
    ecommerceScreenshot.classList.remove('none')
  })
  ecommerceTitle.addEventListener('mouseleave', () => {
    ecommerceScreenshot.classList.add('none')
  })

  nftTitle.addEventListener('mouseover', () => {
    nftScreenshot.classList.remove('none')
  })
  nftTitle.addEventListener('mouseleave', () => {
    nftScreenshot.classList.add('none')
  })

  baseTitle.addEventListener('mouseover', () => {
    baseScreenshot.classList.remove('none')
  })
  baseTitle.addEventListener('mouseleave', () => {
    baseScreenshot.classList.add('none')
  })

  sunnysideTitle.addEventListener('mouseover', () => {
    sunnysideScreenshot.classList.remove('none')
  })
  sunnysideTitle.addEventListener('mouseleave', () => {
    sunnysideScreenshot.classList.add('none')
  })
}