import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4a5490110bmshd03c6c515683777p1e5d6fjsnf6de30eeccaf',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data
}
