export async function getSection() {
  // Loader.show()
  const randomPostURL =
    'https://en.wikipedia.org/api/rest_v1/page/random/summary'
  const sectionObj = {}
  const randomPostReq = await fetch(randomPostURL)
  let pageid = 0
  if (randomPostReq.status === 200) {
    let postObj = await randomPostReq.json()
    sectionObj.title = postObj.title
    sectionObj.author = postObj.author
    pageid = postObj.pageid
  }

  return new Promise((res, rej) => {
    if (randomPostReq.status != 200) {
      // Loader.hide()
      rej(randomPostReq.status)
    }

    const sectionURL = `https://en.wikipedia.org/w/api.php?action=query&format=json&pageids=${pageid}&prop=extracts&exintro=true&explaintext=true&origin=*`
    const sectionReq = new XMLHttpRequest()
    sectionReq.onload = () => {
      if (sectionReq.readyState == 4) {
      }
    }
  })
}
