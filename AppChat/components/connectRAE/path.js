export const fetchLogin = () => 
    fetch('http://localhost:3000')
    .then(res => res.json());