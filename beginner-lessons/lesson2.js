let les = [
{english: "family (jiātíng)" ,chinese: "家庭"},
{english: "big (dà)" ,chinese: "大"},
{english: "several; how many" ,chinese: "几"},
{english: "generation (dài)" ,chinese: "代"},
{english: "to live (zhù)" ,chinese: "住"},
{english: "at; on; in (zài)" ,chinese: "在"},
{english: "together (yìqǐ）" ,chinese: "一起"},
{english: "old（lǎo）" ,chinese: "老"},
{english: "young （shào）" ,chinese: "少"},
{english: "mouth; head (people of a family) (kǒu）" ,chinese: "口"},
{english: "few (shǎo）" ,chinese: "少"},
{english: "the head of a family; patriarch (jiāzhǎng）" ,chinese: "家长"},
{english: "To heed what an elder or superior says; to be obedient (tīnghuà）" ,chinese: "听话"},
{english: "In; inside （lǐ）" ,chinese: "里"},
{english: "To look after (zhàogù)" ,chinese: "照顾"},
{english: "Indicates a change of state (le)" ,chinese: "了"},
{english: "after, later (yǐhòu）" ,chinese: "以后"},
{english: "brothers (xiōngdì)" ,chinese: "兄弟"},
{english: "Mutually, each other (hùxiāng)" ,chinese: "互相"},
{english: "To help (bāngzhù)" ,chinese: "帮助"},
{english: "some (yìxiē)" ,chinese: "一些"},
{english: "Problem; question (wèntí)" ,chinese: "问题"},
{english: "often (chángcháng)" ,chinese: "常常"},
{english: "For (take the place of);to replace (tì)" ,chinese: "替"},
{english: "Self (zìjǐ）" ,chinese: "自己"},
{english: "To decide; decision (juédìng)" ,chinese: "决定"},
{english: "should;ought to (yīnggāi)" ,chinese: "应该"},
{english: "and; with; follow (gēn)" ,chinese: "跟"},
{english: "who, whom (shéi/shuí)" ,chinese: "谁"},
{english: "To marry (jiéhūn)" ,chinese: "结婚"},
{english: "Still; yet (hái)" ,chinese: "还"},
{english: "only （zhǐ）" ,chinese: "只"},
{english: "To think; to miss; to want (xiǎng)" ,chinese: "想"},
{english: "To want; to need; to be about to (yào)" ,chinese: "要"},
{english: "Now; at present (xiànzài)" ,chinese: "现在"},
{english: "already (yǐjīng)" ,chinese: "已经"},
{english: "modern times；modern （xiàndài）" ,chinese: "现代"},
{english: "And (hé)" ,chinese: "和"},
{english: "Indicates doubt or questioning (a)" ,chinese: "啊"},
{english: "why (wèishénme)" ,chinese: "为什么"},
{english: "to be able to (néng)" ,chinese: "能"},
{english: "two (used before a measure word) (liǎng）" ,chinese: "两"},
{english: "here (zhèr)" ,chinese: "这儿"},
{english: "to do (zuò)" ,chinese: "做"},
{english: "busy (máng)" ,chinese: "忙"},
{english: "Worried; to feel anxious; to worry (zháojí)" ,chinese: "着急"},
{english: "for (wèi)" ,chinese: "为"},
{english: "Thing; matter (shì)" ,chinese: "事"},
{english: "Measure word for clothes or matters (jiàn)" ,chinese: "件"},
{english: "To speak (shuō)" ,chinese: "说"},
{english: "Idea （zhǔyi）" ,chinese: "主意"},
{english: "tomorrow (míngtiān)" ,chinese: "明天"},
{english: "birthday (shēngrì)" ,chinese: "生日"},
{english: "For (for the benefit of); to; to give (gěi）" ,chinese: "给"},
{english: "To buy (mǎi）" ,chinese: "买"},
{english: "Pattern (yàng)" ,chinese: "样"},
{english: "thing, object (dōngxi)" ,chinese: "东西"},
{english: "money (qián)" ,chinese: "钱"},
{english: "Do not have; without (méiyǒu）" ,chinese: "没有"},
{english: "right; correct (duì)" ,chinese: "对"},
{english: "To use; with; by means of (yòng)" ,chinese: "用"},
{english: "These (zhèxiē)" ,chinese: "这些"},
{english: "altogether (yígòng)" ,chinese: "一共"},
{english: "unit of currency; piece (kuài)" ,chinese: "块"},
{english: "friend (péngyou)" ,chinese: "朋友"},
{english: "To introduce; introduction (jièshào)" ,chinese: "介绍"},
{english: "English (yīngwén)" ,chinese: "英文"},
{english: "May; can (kěyǐ）" ,chinese: "可以"},
{english: "To study; to learn (xué)" ,chinese: "学"},
{english: "Used to emphasize the obvious (ma)" ,chinese: "嘛"},
{english: "paternal grandfather (yéye)" ,chinese: "爷爷"},
{english: "paternal grandmother (nǎinai)" ,chinese: "奶奶"},
{english: "father (bàba)" ,chinese: "爸爸"},
{english: "mother (māma)" ,chinese: "妈妈"},
{english: "older brother (gēge)" ,chinese: "哥哥"},
{english: "older sister (jiějie)" ,chinese: "姐姐"},
{english: "younger brother (dìdi)" ,chinese: "弟弟"},
{english: "younger sister (mèimei)" ,chinese: "妹妹"},
{english: "thousand (qiān)" ,chinese: "千"},
{english: "ten thousand (wàn)" ,chinese: "万"},
{english: "Hundred million (yì)" ,chinese: "亿"},
{english: "zero (líng)" ,chinese: "零"},
{english: "hundred (bǎi)" ,chinese: "百"}
]

var table = document.getElementsByClassName("table");
generateTable(table, les);
    
function generateTable(table, data) { // require a table element and data
    for (let element of data) { //access each array
        let row = table[0].insertRow();
        for (key in element) { //access info in each array
            let cell = row.insertCell();
            cell.className = "col"
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);

        }
    }
}