// html download
function fetchFileDownload(url) {
  fetch(url).then((res) => {
    res.blob().then((blob) => {
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = 'file.ext'
      a.click()
    })
  })
}
