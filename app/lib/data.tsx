import axios from "axios";

export async function fetchProjects() {
const res = await axios.get(
        `https://api.github.com/users/Abdulla-Kamal/repos`
      );
return res.data;
}