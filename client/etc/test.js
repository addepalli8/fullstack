const fetchalbum=async ()=>{
    const res= await fetch('https://api.github.com/search/users?q=repos:%3E-1&sort=joined&order=desc');
    const json= await (res.json());
    console.log(json);
}
fetchalbum();
