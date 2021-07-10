import axios from "axios";

export const homeController = async (req, res) => {
    const apiData = await axios.get("https://4leaf-crawling.pe.kr/searchGoogle");
    console.log(apiData.data);

    res.render("screens/home", { dataList: apiData.data });

};

export const economyController = async (req, res) => {
    const apiData = await axios.get("https://4leaf-crawling.pe.kr/searchGoogle");
    console.log(apiData.data);

    const newData = apiData.data.filter((data) => data.type == "경제")


    res.render("screens/economy", { dataList: newData });

};

export const politicsController = async (req, res) => {
    const apiData = await axios.get("https://4leaf-crawling.pe.kr/searchGoogle");
    console.log(apiData.data);

    const newData = apiData.data.filter((data) => data.type == "정치")


    res.render("screens/politics", { dataList: newData });

};

export const socialController = async (req, res) => {
    const apiData = await axios.get("https://4leaf-crawling.pe.kr/searchGoogle");
    console.log(apiData.data);

    const newData = apiData.data.filter((data) => data.type == "사회")


    res.render("screens/social", { dataList: newData });

};