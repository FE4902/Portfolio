import axios from "axios";
import xml2js from "xml2js";

/**
 * 티스토리 RSS 가져오기
 * @param {String} rssURL
 * @returns {{
 * title: String,
 * items: Array.<{
 *  title: String[],
 *  link: String[],
 *  description: String[],
 *  category: String[],
 *  author: String[],
 *  coments: String[],
 *  pubDate: String[]
 * }>}} Json
 */

async function getTistoryRSS(rssURL) {
    const rssXML = (await axios.get(rssURL)).data;
    const jsonData = await xml2js.parseStringPromise(rssXML);
    const rssObject = jsonData.rss.channel[0];

    return {
        title: rssObject.title[0],
        items: rssObject.item,
    };
}

export default getTistoryRSS;
