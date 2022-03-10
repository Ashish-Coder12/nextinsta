// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function fetchapi(){
  fetch("https://instagram.com/andyz_talk/?__a=1")
  .then(response => response.json())
  .then(data => {return data})
}

export default function handler(req, res) {
  // function fetchapi(){
    
  // }
  fetch("https://instagram.com/andyz_talk/?__a=1")
  .then(response => response.json())
  .then(data => {  res.status(200).json(data)})
}
