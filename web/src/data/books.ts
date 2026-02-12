export interface Book {
    id: string;
    title: string;
    nepaliTitle?: string;
    author: string;
    price: number;
    originalPrice?: number;
    image: string;
    images?: string[];
    genre: string;
    isNew?: boolean;
    pages?: number;
    language?: string;
    format?: string;
    rating?: number;
    reviews?: string;
    synopsis?: string;
    authorBio?: string;
    authorImage?: string;
    inventory?: number;
}

export const books: Book[] = [
    {
        "id": "64",
        "title": "चमेलीको फूल बैजनी रुमाल",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33278950/img-5914-w1920-o.jpg",
        "genre": "Stories,Short Stories",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट जसको साहित्यिक धुनले हर पाठकको धड्कन धड्किन्छ । जसको लेखनले दिल&ndash;दिमागलाई भित्रैसम्म स्पर्श गर्छ । जसको कथाको रसमा पृथ्वीका कुना&ndash;कुनामा पाठक एकसाथ भुनभुनिन्छन् । जसको लेखन एकपछि अर्काे उत्तरोत्तर गहिरो, अग्लो अनि फराकिलो छ । उनै सुबिन भट्टराईको आख्यान चमेलीको फूल बैजनी रुमाल यस्तो कृति हो, जहाँ प्रेम छ, सम्बन्धका रौंचिरा छन्, मनोविज्ञान छ, जादुमय शिल्प छ, नारीमय प्रगतिशीलता छ, र छ धेरैथोक । यसको पठनले पैदा गर्ने झङ्कार एउटा मीठो याद बनेर बाँच्नेछ, हरेकको मनमा । &nbsp;</p>",
        "inventory": 63
    },
    {
        "id": "93",
        "title": "Hiund",
        "nepaliTitle": "हिउँद",
        "author": "Nadeesh",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33444104/out-of-stock-you-can-still-place-a-pre-order-now-w1168-o.png",
        "genre": "Poems",
        "synopsis": "<p><strong>PRE-ORDER NOW</strong></p><p>&nbsp;</p><p><strong>पछिल्लो बाहिरी पृष्ठबाट</strong></p><p>&nbsp;</p><p>मान्छेको नङ्ग्राले आकाश चिथोर्दै छ</p><p>&nbsp;</p><p>यो पृथ्वीको कोकुनभित्र</p><p>मान्छे</p><p>सायद पुतली भइसकेको</p><p>&nbsp;</p><p>झुसिलकिरा हुँदा उसले निलिसकेको छ</p><p>धर्तीका जम्मै हरिया पातहरू</p><p>&nbsp;</p><p>आकाश त्यतै अब कहाँ जाने ?</p><p>&nbsp;</p><p>ब्रह्माण्डको कुन तारामा</p><p>भेट्छ होला उसले फूलबारी ?</p>",
        "inventory": -1
    },
    {
        "id": "67",
        "title": "इश्वरको कारागार  (The Prison of GOD)",
        "author": "Dr",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33333352/f0c93c49-6d77-4c84-aebb-2940e6434baa-w1600-o.png",
        "genre": "Poems",
        "synopsis": "<p>By Dr. Anmol Kandel</p><p>कवि अनमोल कँडेल, हाल संयुक्त राज्य अमेरिकाको लस एन्जलस शहरमा बसेर अनुसन्धान र काव्य रचना गर्छन् । पेशाले अनुसन्धानकर्ता रहे तापनि उनको हृदय सधैं कविता र दर्शनका आयाममा स्पन्दित रहन्छ। सेतो रक्तकोशिकासम्बन्धी इम्युनोलोजीमा विद्यावारिधि (PhD) प्राप्त गरेका डा. कँडेल अहिले City of Hope Cancer Center लिम्फोमा क्यान्सरको भ्याक्सिन निर्माण तथा इम्युनोथेरापीसम्बन्धी अनुसन्धानमा संलग्न छन् । उनको जीवन अहिले चेतनाका रहस्यलाई कला र विज्ञानका माध्यमबाट बुझ्ने यात्रा बनेको छ ।</p><p>ईश्वरको कारागार शीर्षकमा प्रकाशित यो संग्रह, कवि अनमोल कँडेलको पहिलो कविता कृति हो । यहाँ दर्शन, प्रेम, पीडा, विद्रोह, मौनता र मुक्ति सबै एकैसाथ उपस्थित छन् । कविता केवल भावनात्मक आवेग मात्र होइनन्, ती बोध वाक्य पनि हुन् जसले पाठकको हृदयमा गहिरो र अनौठो संवेदना उत्पन्न गराउँछन् ।</p>",
        "inventory": 20
    },
    {
        "id": "66",
        "title": " युगदेखि युगसम्म: जीवन, सिनेमा र समाज",
        "author": "Yangesh",
        "price": 22,
        "image": "https://files.secure.website/wscfus/10720412/33298826/img-6086-w1276.jpeg",
        "genre": "Memoir-History,Biography",
        "synopsis": "<p>Yug Dekhi Yug Samma युगदेखि युगसम्म: जीवन, सिनेमा र समाज</p><p>&nbsp;</p><p>by Yangesh, Rajesh Hamal</p><p>&nbsp;</p><p>पछिल्लो बाहिरी पृष्ठबाट</p><p>&nbsp;</p><p>फिल्म कलाकारका रुपमा मात्र नभई बौद्धिकता र व्यक्तित्वका मामिलामा अत्यन्तै रुचाइएका नेपालीमध्ये अग्रस्थानमा पर्छन्, राजेश हमाल । उनैसँग जीवन, सिनेमा र समाजबारे गरिएको अन्तरङ्ग कुराकानी हो, युगदेखि युगसम्म । पुस्तकमा उनले आफ्नो परिवार, बाल्यकाल, युवाकाल, प्रेमिका र वैवाहिक जीवनबारे खुलेर बोलेका छन् । आफूले अभिनय गरेका फिल्म, सँगै काम गरेका कलाकार र निर्देशकका साथै चलचित्रमा आफ्नो रुचि एवम् प्राथमिकताबारे पनि उनी यसमा मुखर छन् । &lsquo;महानायक&rsquo;को उपाधि र बेला&ndash;बेला यसमाथि आउने प्रश्नहरुबारे खासमा राजेश हमाल के सोच्छन् भन्नेलगायत जिज्ञासाको जवाफ पनि पुस्तकले दिनेछ ।</p>",
        "inventory": 13
    },
    {
        "id": "73",
        "title": "China Harayeko Manchhe",
        "nepaliTitle": "चिना हराएको मान्छे",
        "author": "Hari Bansha Acharya",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33336460/china-harayeko-manchhe-wowqdv3-w1259-o.jpg",
        "genre": "Memoir-History",
        "synopsis": "<p>\"जीवनको एउटा दुःखदायी घटनाले कलाकार हरिवंश आचार्यलाई सुखद आविष्कार गर्न लगायो, जुन नेपाली पाठकका लागि अनुपम उपहार हो । अभिनय गरेर अरूलाई पेट मिचीमिची हँसाउन र धरधरी रुवाउन सक्ने यी कलाकार आफ्नो वास्तविक जीवनमा कति हाँसेका छन् र कति रोएका छन् ? यसको बेलीबिस्तार पुस्तकमा छ । चिना हराएको मान्छे नेपालका एक महान् कलाकारले नेपालीलाई दिएको थप उपहार हो । यो पुस्तक पढिसकेपछि नेपाली बाआमालाई आफ्नै छोराको जीवन पढे जस्तो लाग्नेछ, नेपाली दाइदिदीहरूलाई आफ्नै भाइको र नेपाली भाइबहिनीहरूलाई आफ्नै दाइको जीवन पढे जस्तो लाग्नेछ ।\"</p><p>&ndash; अमर न्यौपाने, मदन पुरस्कार विजेता सेतो धरतीका लेखक</p>",
        "inventory": 9
    },
    {
        "id": "7",
        "title": "हृदय",
        "author": "Bhagawan Koirala",
        "price": 25,
        "image": "https://files.secure.website/wscfus/10720412/30818348/front-cover-hridaya-w1920.jpeg",
        "genre": "Biography",
        "synopsis": "<h2 class=\"subtitle is-5 mb-05 mt-m05\" data-v-ac2df6ee=\"\">हृदय (Hridaya)</h2><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Bhagawan Koirala</span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>लगनशील, मिहिनेती, इमानदार चिकित्सक मात्र होइन, उस्तै सफल व्यवस्थापक पनि । भगवान कोइरालाको यो पुस्तक पढेपछि थाहा हुन्छ- सत्कर्म गर्नेहरुका लागि हाम्रो राजनीति कति साधक हो, कति बाधक ! कोइरालाको यो संस्मरणात्मक कृतिले नेपालको चिकित्सा क्षेत्रका समस्या, समाधान, उपलब्धि र सम्भावनाको ऐना त देखाउँछ नै, सँगै चिकित्सा क्षेत्रलाई जनजनमा पनि पुऱ्याउनेछ । र बनाउनेछ कसैलाई भावुक अनि कसैलाई उत्प्रेरित । कोइरालाले अनेकौ अवरोध, प्रलोभन, समस्या र अस्तव्यस्तताबीच जेजति गर्न सके, त्यसबारे पढेपछि नास्तिक पनि हुनेछ आस्तिक र भन्नेछ- भगवान (कोइराला), सलाम !</p><p>&nbsp;</p><p><strong>अपरेसन थिएटर बाहिरको कथा&nbsp;</strong><br />बाह हजारभन्दा बढी मुटुको शल्यक्रिया गरेका डा. कोइरालाले नेपालमा बालबालिकाको उपचारका निम्ति बहुविशिष्टीकृत अस्पतालको अभाव महसुस गरे । त्यही अभाव कम गर्न र पैसा अनि पहुँच नभएका वा भएर पनि नेपालमा उपचार सम्भव नभएका कारण कुनै पनि बालबालिकाले ज्यान गुमाउनु नपरोस् भन्ने हेतुले बाल अस्पताल निर्माणको योजना बनाए ।&nbsp;<br />सातै प्रदेशमा अस्पताल निर्माणको खाका कोरेका कोइराला र उनको समूहले काठमाडौं इन्स्टिच्युट अफ चाइल्ड हेल्थ, केन्द्रीय अस्पताल भवन निर्माणको काम सुरू गरिसकेको छ ।&nbsp;<br />तपाईंले खरिद गर्नुभएको यस पुस्तकबाट प्राप्त हुने लेखकस्वको ५० प्रतिशत अस्पताल निर्माण अभियानलाई जानेछ ।</p></div></div>",
        "inventory": 12
    },
    {
        "id": "94",
        "title": "Nepal Ganatantrabata Swatantra नेपाल गणतन्त्रबाट स्वतन्त्र: पृथ्वीपथ, नेपालवादको उदय",
        "author": "Ekanta sharma",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33430282/nepal-ganatantrabata-swatantra-8c9vcfr-w902-o.jpg",
        "genre": "Political",
        "synopsis": "",
        "inventory": 2
    },
    {
        "id": "88",
        "title": "Radha",
        "nepaliTitle": "राधा",
        "author": "Krishna Dharabasi",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337390/radhjpg-w948-o.png",
        "genre": "Novel",
        "synopsis": "<p>Awards<strong> Madan Puraskar, 2062 BS Winner</strong></p><p>राधा&nbsp; नेपाली भाषामा लेखिएको धार्मिक विषय वस्तुमा आधारित नेपाली उपन्यास हो ।उपन्यासले विक्रम सम्वत् २०६२ सालमा मदन पुरस्कार प्राप्त गरेको थियो । राधा उपन्यासकी मुख्य नारी पात्र महाभारत महाकाव्यकी राधा हुन् । उनले आफ्नो जीवनको पूर्वार्धमा नारी अस्तित्वको खोजी गरेको विषय उपन्यासमा चित्रण गरिएको छ। Radha represents an example of an outstanding Nepali novel. This Novel is written by Krishna Dharabasi. It plots the story of ancient epic Mahabharat with some changes that are not included in that epic. However the character Radha is very famous for the love relationship with Krishna in Hindu religion, she has been left far behind in the story of Mahabharat.</p>",
        "inventory": 3
    },
    {
        "id": "82",
        "title": "Jeevan Kaada Ki Phool",
        "nepaliTitle": "जीवन काँडा कि फूल",
        "author": "Jhamak Kumari Ghimire",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337377/jeevan-front-thumbnail-280x405-70jpg-w265-o.png",
        "genre": "Biography",
        "synopsis": "<p>Awards Madan Puraskar, 2067 BS Winner Uttam Shanti Puraskar, 2068 BS Winner Padmashree Sahitya Puraskar, 2067 BS Winner Jiwan Kada Ki Phool&nbsp;&nbsp;is a book and Madan Puraskar winner written by Jhamak Ghimire about her own story. It has been printed seven times within two years making it the Nepali best seller of all time. It has also received many other awards. The book is inspirational and encouraging and has something for everyone to learn from. It has recently been translated into English as &ldquo;A flower in the midst of thorns&rdquo;.It is all about her life and the difficulties she faced. It is really good to read.</p><p><strong> पछिल्लो बाहिरी पृष्ठबाट</strong></p><p>जन्मको झमक घिमिरेलाई कर्मको झमक घिमिरेले जितेको कथा हो, 'जीवन काँडा कि फूल!'</p>",
        "inventory": 3
    },
    {
        "id": "75",
        "title": "Ek Sarko Maya",
        "nepaliTitle": "एक सर्को माया",
        "author": "G.S. Poudel",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33336472/ek-sarko-maya-front-w970-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>यो उपन्यास रोजगारीका लागि माल्दिभ्स पुगेको एउटा त्यो नेपाली युवकको कथा हो जो अञ्जानमै कुलतमा फस्दछ र आफू कुलतमा फसेको थाहा पाएर पनि बाहिर आउन सफल हुँदैन । कुलतकै बीच त्यहाँकी एउटी सुन्दरी मोडेलसंगको उसको प्रेम, प्रेम र नसाबीचको उसको मानसिक संघर्ष र अन्त्यमा उसले र पाठकले एकसाथ अनुभूत गर्ने मृग मरिचिका नै &ldquo;एक सर्को प्रेम&rdquo; को सार हो । पछिल्लो समय नेपाली साहित्यमा प्रकाशित भइरहेका एकै खालका उपन्यासहरु भन्दा पृथक कथावस्तु र लेखनशैली छ यो उपन्यासमा । हालुसिनेसनको डरलाग्दो उदाहरण प्रस्तुत भएको जिएस पौडेलको ४५० पृष्ठ लामो यो उपन्यास पढिसक्दा पाठकले एउटा फरक संसारको यात्रा गरिसक्छ । धुवाँको लामो सर्को मात्रै नभई प्रेमको सर्कोसंगै अघि बढेको कथामा केही उपकथाहरु आएर जोडिएका छन् र पुस्तकलाई थप रोमाञ्चक बनाएका छन् । विल्कुलै नयाँ लेखक हुन् जिएस पौडेल उपन्यासको दुनियाँमा । तर यिनको लेखनीमा प्रयोग भएको भाषा र शैलीले मलाई खूब प्रभावित गरेको छ । लामो समयदेखि माल्दिभ्स बस्दै आएका जिएस पौडेलले राउधा आतीफ (मालिदभियन मोडेल) को सौन्दर्यमाथि गरेको फेन्टासीपूर्ण प्रेमकथामा आधारित यो उपन्यास लोकप्रिय मात्रै हैन, लामो समयसम्म नेपाली उपन्यासका पारखीहरुले पढिरहने उपन्यास हुनेमा म विश्वस्त छु । शुभकामना लेखक र बुलबुल पब्लिकेशनलाई Ek Sarko Maya को लागि । &ndash; वरिष्ठ रेडियो कर्मी अच्युत घिमिरे बुलबुल</p><p>GS Poudel is new to the world of novels, however, the language and style used in this is greatly influential. This novel is based on the fantasy love story of Raudha Atif (Maldivian Model).</p>",
        "inventory": 2
    },
    {
        "id": "85",
        "title": "Swasparsha",
        "nepaliTitle": "स्वस्पर्श: आशा, प्रेरणा र खुसीका कथा",
        "author": "Dr. Nawaraj KC",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337384/swasparsha-6gsqq3b-w1250-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट उतारचढावको समय तपाईं आफूसँग छटपट-छटपट स्वयुद्धमा बिताउनुहुन्छ वा आफूलाई सम्हाल्न सक्ने आफ्नै आलिङ्गनको स्वस्पर्शमा ? यो पुस्तक हरेक मानिसका लागि त्यही स्वयुद्धबाट स्वस्पर्शसम्मको एउटा यात्रा हो, जसका सहयात्री छन्, प्रेरणादायी केही भुइँमान्छे । यी भुइँमान्छेका कथा र तिनमा समाहित बुद्ध-विज्ञान पढ्दै गर्दा खुसी खोज्नेले बीउखुसी भेट्नेछन् अनि दुःखमा अल्झिएकाले भेट्नेछन् दुःखपारिसम्म पुग्ने आशा, प्रेरणा र परिवर्तनको जीवनमार्ग ।</p>",
        "inventory": 4
    },
    {
        "id": "74",
        "title": "Pagal Basti",
        "nepaliTitle": "पागल बस्ती",
        "author": "Sarubhakta",
        "price": 18,
        "image": "https://files.secure.website/wscfus/10720412/33336471/pagalbasti-w779-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>Awards Madan Puraskar, 2048 BS Winner पागल बस्ती प्रख्यात साहित्यकार शरुभक्त द्वारा लिखित समसामयिक नेपाली उपन्यास हो। यो उपन्यासले २०४८ सालको मदन पुरस्कार समेत प्राप्त गरेको थियो।</p><p>Sarubhatka is the pen name of Bhakta Raj Shrestha, a celebrated Nepalese novelist and poet and a winner of Madan Puraskaar, the most prestigious literary honour in Nepal for this book. This book presents a very unique example of different story, story presentation, characterization and writing style in Nepali literature. It is an experimental writing in Nepali literature.</p><p>पछिल्लो बाहिरी पृष्ठबाट त्यो मेरो अनुभूतिभन्दा बाहिरको मूल्य हो आदिमाता ! म त्यसलाई हृदयमा स्पर्श गर्न सक्तिनँ । आदिगुरु मेरो आदर्श हुनुहुन्छ, मेरो प्रेरणा हुनुहुन्छ, मेरो मार्गदर्शक हुनुहुन्छ, मेरो प्रज्ञाको ऊर्जा हुनुहुन्छ । त्यसैले त्यो मूल्य मेरो व्यक्तिगत मूल्य नभएर आदिगुरुको मूल्य हो । गुरु आफ्नो मूल्यलाई साना&ndash;साना टुक्राहरूमा बाँडेर संसारभर फिँजाउन चाहनुहुन्छ । म उहाँको एक सानो टुक्रा मूल्य हुँ, जुन मेरो आफ्नो मूल्य होइन । आदिमाता, मेरो वास्तविक मूल्य कसैले तोकिसकेको छ, म यही एउटा मूल्य अनुभव गर्छु...</p>",
        "inventory": 3
    },
    {
        "id": "72",
        "title": "Nilo Prem",
        "nepaliTitle": "नीलो प्रेम",
        "author": "Purushottam Bajagai",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33336457/nilo-prem-7dnyomp-w1259-o.jpg",
        "genre": "General",
        "synopsis": "<p>'नीलो प्रेम' नेपाली साहित्यमा बहुअर्थी रूपमा आएको छ&ndash; कतै नीलो आकाशझैँ प्रेमको उच्च अवस्था जस्तो, त कतै नीलो सागरझैँ हार्दिकताको गहिराइ जस्तो । तर, के प्रेमले जीवनलाई सधैँ खुलेको नीलो आकाशझैँ उज्यालो बनाइरहन्छ ? कि प्रेमले प्रेमीहरुका जीवनमा मसीझैँ नीलाम्य डामहरु पनि बसाइदिन्छ ? साँगाको पुलिस स्कुलदेखि उठेको यो उपन्यास एक जोडीको प्रेमकथा मात्र होइन- यो मित्रता, पारिवारिक सम्बन्ध र जीवनका कठिन मोडहरूमा पाइला चाल्ने सङ्घर्षको कथा पनि हो । विशेषगरी किशोर-किशोरी तथा युवा उमेर समूहले यसलाई आफ्नै कथाझैँ ठान्नेगरी उपन्यासकार बजगाईंले प्रस्तुत गरेका छन् । यो उनको लेखनको सबल पक्ष हो । कति कथा पढिन्छन्, छाडिन्छन् तर यो कथा भने पाठक सँगसँगै हिँडिरहन्छ, पढिसकेपछि पनि पाठकको मन-मस्तिष्कमा घुमिरहन्छ किनभने 'नीलो प्रेम' केवल प्रेम होइन, यो हाम्रै जीवनको एउटा रङ पनि हो ।</p>",
        "inventory": 3
    },
    {
        "id": "87",
        "title": "Tarajuma Prem - Love Within The Scales By Prawin Dahal",
        "author": "Unknown Author",
        "price": 18,
        "image": "https://files.secure.website/wscfus/10720412/33337389/tarajuma-prem-w1068-o.jpg",
        "genre": "Novel",
        "synopsis": "<h3>OverView</h3><h3>The one that reminds everything are going to be sensible is that the one who ruins everything. they'll solely provide you with anxiety and leave. Some folks stay shut whether or not there are thousands of miles away, whereas, some WHO are in your ...</h3>",
        "inventory": 3
    },
    {
        "id": "86",
        "title": "Kalpa कल्प",
        "author": "Dr. Naba Raj Lamsal",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337386/kalpa-ytqebtt-w998-o.jpg",
        "genre": "Poems",
        "synopsis": "<p><strong>पछिल्लो बाहिरी पृष्ठबाट</strong></p><p>हो,</p><p>व्यास बोले, शुकदेव बोले</p><p>सुतजी बोले, अठासी हजार ऋषि बोले</p><p>कृष्ण बोले, अर्जुन बोले</p><p>समय बोल्यो, सभ्यता बोल्यो</p><p>कवि बोले, कलाकार बोले !</p><p>&nbsp;</p><p>बोल्नैका लागि त</p><p>हिउँ बोल्यो, हिमाल बोल्यो</p><p>पानी बोल्यो, आगो बोल्यो</p><p>जीव बोल्यो, जीवन बोल्यो</p><p>चेतना बोल्यो, चैतन्य बोल्यो</p><p>बर्खा बोल्यो, वसन्त बोल्यो</p><p>वृक्ष, वनस्पति बोल्यो, पशु, पंक्षी बोल्यो</p><p>आकाश, पातल बोल्यो, बाढी, पहिरो बोल्यो&nbsp;</p><p>रोदी बोल्यो, छठ बोल्यो</p><p>देउडा पनि बोल्यो, मारुन्नी पनि बोल्यो&nbsp;</p><p>तर नबोल्ने मै थिएँ !</p><p>&nbsp;</p><p>बोल्ने शक्ति दिएँ, ताकत दिएँ</p><p>तर म कहिल्यै बोलिनँ !</p><p>&nbsp;</p><p>नबोल्नु</p><p>बोल्नै नजान्नु पनि त होइन !</p><p>&nbsp;</p><p>तिमी सुन र</p><p>अब मलाई बोल्नदेऊ</p><p>आज मै बोल्छु, मै खोल्छु रहस्य&nbsp;</p><p>म को हुँ ?</p>",
        "inventory": 2
    },
    {
        "id": "84",
        "title": "Simsara",
        "nepaliTitle": "सिमसारा",
        "author": "Basanta Basnet",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337382/simsara-yeq7quy-w965-o.jpg",
        "genre": "Novel",
        "synopsis": "<p><strong>पछिल्लो बाहिरी पृष्ठबाट</strong></p><p>यो कथा हो, मूलखाँबो नमिलेको एउटा घरको, जहाँ प्रेम अलिअलि गर्दै निभ्दै छ । यो कथा हो, बुबा धनरूपको, जसलाई आफ्नो घर किन चिसिँदै छ भनेर थाहा छैन । यो कथा हो, छोरा संवत्&zwnj;को, जसले घरमा नदेखेको प्रेमको पूर्तिका लागि एउटा सुन्दर सम्बन्धको कल्पना गरिरहन्छ । यो कथा हो, मन्दाक्रान्ताको, जो मूलखाँबो नमिलेको घरलाई जसरी पनि ठीक पार्न कटिबद्ध छिन् । अनि यो कथा हो, यी तीन पात्रको, जो नजिकिन होइन, टाढिन विवश छन् ।</p>",
        "inventory": 3
    },
    {
        "id": "83",
        "title": "Torkin",
        "nepaliTitle": "तोरकीन",
        "author": "Kshitiz Samarpan",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337380/torkin-w958-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट सपनाहरूको कुनै भूगोल हुन्छ कि हुँदैन ? सुदूर गाउँमा आदिम जिन्दगी बाँचिरहेका मानिसका सपना के-के थिए, के-के छन् ? सपनाको बाटो पछ्याउँदै उनीहरू कहाँ-कहाँ पुग्छन् ? सपनाको अग्लो हिमालमा कतिन्जेल टिक्छ सम्बन्धको न्यानो हिउँ ? कि पग्लेर मन पनि कालापत्थर बन्छ- हिमालजस्तै ? हिमालपारिको जिल्ला मुस्ताङको पनि माथिल्लो भेगमा छ एउटा गाउँ- चराङ । त्यही चराङको एक सामान्य युवाको जीवनमा आउने आरोह-अवरोह तथा सपना र सम्बन्धहरूको कथा हो- तोरकीन । माथिल्लो मुस्ताङको जन्म, विवाह, मृत्यु-संस्कार, रहनसहन, बसाइँसराइ, संस्कृति, परम्परा तथा गुम्बा र दरबारको सामाजिक, सांस्कृतिक एवम् भौगोलिक इतिहासको कथा हो यो । रित्तिंदै गएका वस्ती, पग्लिँदै गरेका हिमाल, चिसिँदै गएका सम्बन्ध, हराउँदै गएका संस्कार, परम्परा र संस्कृतिको कथा तोरकीनले पाठकलाई फेरि मानव सभ्यताको जरामा फर्काउनेछ ।</p>",
        "inventory": 3
    },
    {
        "id": "81",
        "title": "Nepathya Biography of a Nepali band",
        "nepaliTitle": "नेपथ्य: लोकप्रिय यात्राको अन्तरङ्ग",
        "author": "Girish Giri",
        "price": 22,
        "image": "https://files.secure.website/wscfus/10720412/33337373/nepathya-xa9oc2i-thumbnail-280x405-70-w255-o.jpg",
        "genre": "Biography",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट नेपथ्य नेपाली मौलिक धुनलाई आत्मसात् गर्ने लोकप्रिय रक ब्यान्ड हो । यसको सङ्गीतमा नेपाली भाषा र संस्कृति जीवन्त हुन्छ । यसले आफ्नो सङ्गीतमार्फत शान्ति र सद्भाव फैलाउँछ । द्वन्द्वकालमा 'शान्ति सङ्गीत यात्रा' लिएर देश डुलेको नेपथ्यका गीतमा देश-काल-परिस्थितिको काव्यिक चित्र भेटिन्छ । सन् १८८० को दशकदेखि देश - विदेशका मञ्चमा निरन्तर प्रस्तुत भइरहेको नेपथ्यको नेपथ्य-कथा यस पुस्तकमा पढ्न सकिन्छ । लेखक गिरीश गिरीले ब्यान्डका मियो अमृत गुरुङसँगको लामो सङ्गतमा यो ब्यान्ड&ndash;बायोग्राफी तयार पारेका हुन् ।</p>",
        "inventory": 3
    },
    {
        "id": "80",
        "title": "Shreemadbhagavadgita",
        "nepaliTitle": "श्रीमद्भगवद्गीता: यथारूप",
        "author": "Shrimad A.C. Bhakti Vedant Swami Prabhupad",
        "price": 22,
        "image": "https://files.secure.website/wscfus/10720412/33337371/shreemadbhagwadgita-yatharop-w719-o.jpg",
        "genre": "Religious",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट भगवद्गीता विश्वभरी नै आध्यात्मिक ज्ञानको मणिको रूपमा प्रसिद्ध छ। भगवान् श्रीकृष्णद्वारा आफ्ना घनिष्ठ मित्र अर्जुनलाई भन्नुभएको सारले युक्त सात सय श्लोकहरूले आत्मसाक्षात्कारको विज्ञानको लागि निश्चित मार्गदर्शन गर्दछ। वास्तवमा मानिसका आवश्यक स्वभाव, उसको परिवेश र अन्तत: भगवान श्रीकृष्णसँग उसको सम्बन्धको विषयमा रहोस्योद्घाटन गर्ने यस समान अन्य कुनै ग्रन्थ छैन। कृष्णकृपामूर्ति श्री श्रीमद् अभयचरणारविन्द भक्तिवेदान्त स्वामी प्रभुपाद (तस्विरमा) विश्वका अग्रगण्य वैदिक विद्वान् र शिक्षक हुनुहुन्छ र उहाँ भगवान् श्रीकृष्ण स्वयमद्वारा प्रारम्भ गरिएको पूर्णतया आत्मसिद्ध आध्यात्मिक अविच्छिन्न गुरु-शिष्य परम्पराको प्रतिनिधित्व गर्नुहुन्छ। भगवद्गीताका अन्य संस्करणहरू भन्दा भिन्न यसमा उहाँले भगवान् श्रीकृष्णका गम्भीर सन्देशलाई कुनै पनि प्रकारको मिश्रण र आफ्ना निजी प्रेरित भावना रहित यथारूप प्रस्तुत गर्नुभएको छ।</p>",
        "inventory": 5
    },
    {
        "id": "79",
        "title": "Durbar Bahiraki Maharani",
        "nepaliTitle": "दरबारबाहिरकी महारानी",
        "author": "Nagendra Neupane",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337368/darbar-bahiraki-maharani-w315-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>नेपालको जन आन्दोलनलाई वस्तु बनाएर लेखिएको यो उपन्यासले &lsquo;नइ&rsquo; पुरस्कार पनि जितेको थियो।</p>",
        "inventory": 3
    },
    {
        "id": "78",
        "title": "Nepali Shakuntala",
        "nepaliTitle": "नेपाली शाकुन्तल: महाकाव्य",
        "author": "Laxmi Prasad Devkota",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337362/nepali-shakuntala-gbc0ls9-w792-o.jpg",
        "genre": "महाकाव्य",
        "synopsis": "<p>महाकवि कालिदासको 'अभिज्ञान शाकुन्तलम्'को कथानकलाई प्रमुख आधार मानी यो शाकुन्तल महाकाव्य रचना गरिएको हुनाले यसमा विश्व प्रसिद्ध संस्कृत साहित्यका महाकवि कालिदासलाई नेपाली साहित्यका महाकवि देवकोटाले पछ्&zwnj;याएको देखिन्छ । प्रकृतिकी छोरी शकुन्तलाको प्राकृतिक साहचर्य, मानव र प्रकृतिको मधुर मिलन प्रदर्शन गर्ने उद्देश्यले प्रस्तुत महाकाव्य लेखिएको छ । शाकुन्तल महाकाव्य नेपालीमा प्रकाशित पहिलो मौलिक महाकाव्य हो । यसको कथावस्तु प्राचीन भए तापनि कवि कल्पनाले गर्दा यो मौलिक बन्न पुगेको छ । वि.सं. २००२ सालमा पहिलो पल्ट प्रकाशित यो महाकाव्य नेपाली महाकाव्यको मङ्गलाचरणका रूपमा आएको छ ।</p>",
        "inventory": 2
    },
    {
        "id": "77",
        "title": "Mahayug",
        "nepaliTitle": "महायुग",
        "author": "Seema Abhas",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33337358/mahayug-hnvsudj-w872-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट स्त्रीले शरीरको सीमातीत शक्ति र आत्मालाई चिनेपछि आफूलाई मात्र होइन, सारा मानवता र सृष्टिलाई नै नयाँ उज्यालोतर्फ डोऱ्याउने सामर्थ्य राख्छन् । आत्मजागृति एक व्यक्तिको मात्र नभई पिंढीदेखि पिंढीसम्मको चेतना हो । त्यही चैतन्यका चार पुस्ताको कथामाला हो- महायुग । सामाजिक सम्मोहनको घेरामा बाँधिएर पनि स्त्रीहरूभित्र अवचेतन रूपमा गहिरो मौनता बाँचिरहेको हुन्छ । त्यही मौनतालाई नै उनीहरू आफ्नो अस्तित्व, आत्मशक्ति र बोधसहित आवाजमा बदल्न सक्षम हुन्छन् । नीलाञ्जनादेखि यक्षिणीसम्मको यात्रा स्त्रीभित्रै सुरु भएको पुनर्जागरण, समयको पुकार र मार्गदर्शन हो । त्यही स्त्रीतन्त्रको कथा हो- महायुग ।</p>",
        "inventory": 3
    },
    {
        "id": "45",
        "title": "पानीघट्ट (Pani Ghatta)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30854364/pani-ghatta-final-cover3-w1920.jpeg",
        "genre": "Novel",
        "synopsis": "<div class=\"book-intro\" data-v-ac2df6ee=\"\"><h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Pani Ghatta</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span> <span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/suresh-pranjali/\" data-v-ac2df6ee=\"\">Suresh Pranjali</a></span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>लैङ्गिक विभेदको कठोर सामाजिक यथार्थबाट सुरू भएको उपन्यास पानीघट्ट गुरूङ जातिमा प्रचलित रोधी संस्कृति र लाहुरे परम्परासँगै हुर्किएकी एउटी बाहुनी ठिटी जूनमाया र गुरूङ ठिटो रनबहादुरबीचको रोचक प्रेमकथा हो । यस अर्थमा पानीघट्ट आफैमा सामाजिक मूल्य रूपान्तरण तथा सांस्कृतिक अन्तर्षुलनको साक्षी हो ।<br />तीस र चालिसको दशकको गण्डकी भेगको ग्रामीण समाजमा एउटी महिलाले विवाहअघि र पछि बेहोर्नुपरेको कहरलाई 'पानी' र 'घट्ट'को बिम्बात्मक चित्रमा उतारिएको उपन्यास कथ्य भाषाको मीठो प्रयोग र आञ्चलिक शब्दावलीको सुगन्धित हरकले पठनीय बनेको छ ।</p></div></div><hr data-v-ac2df6ee=\"\" /></div><div class=\"columns buy-blocks is-mobile\" data-v-ac2df6ee=\"\">&nbsp;</div><p>&nbsp;</p>",
        "inventory": 5
    },
    {
        "id": "71",
        "title": "Sagarmatha ko Gahirai",
        "nepaliTitle": "सगरमाथाको गहिराइ",
        "author": "Nawaraj Parajuli",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33336453/sagarmatha-w755-o.jpg",
        "genre": "Poems",
        "synopsis": "<p>Awards Padmashree Sahitya Puraskar, 2073 BS Winner Nominations Madan Puraskar, 2073 BS अल नेपाली पोयट्री स्ल्याम&ndash;२०१४ का विजेता र साताको साहित्य पुरस्कार २०१५ (अष्ट्रेलिया)बाट पुरस्कृत नवराज पराजुली &lsquo;पर्फमेन्स पोयट्री&rsquo;बाट समकालीन कवितामा सर्वाधिक चर्चामा आएका कवि हुन् । सामाजिक सञ्जालमा संसारभरिबाट उनका कविता लाखौं पटक हेरिएका छन् । Nawaraj Parajuli is a rising Nepali Young Poet. He was born in Jhapa. He is the winner of \"All Nepal Slam Poetry 2014\". Here is his masterpiece Sagarmatha ko Gahirai.</p>",
        "inventory": 5
    },
    {
        "id": "76",
        "title": "Laxmi Nibandhasangraha",
        "nepaliTitle": "लक्ष्मी निबन्धसङ्ग्रह",
        "author": "Laxmi Prasad Devkota",
        "price": 25,
        "image": "https://files.secure.website/wscfus/10720412/33337354/laxmi-nibandha-sangraha-manjari-pub-olpsw1b-w949-o.jpg",
        "genre": "Literature/Essays",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट लक्ष्मीप्रसाद देवकोटा जति महाकवि हुन्, उति नै निबन्धकार पनि हुन् । उनले नै नेपाली साहित्यमा आधुनिक निबन्धको थालनी गरेका हुन् । रुमानी अभिव्यक्ति, काव्यिक शैली, काल्पनिक उडान, तार्किक विचार र जादुमय वाक्यविधानका कारण उनका निबन्ध विशेष लाग्छन् । त्यसको ज्वलन्त उदाहरण हो, लक्ष्मी निबन्धसङ्ग्रह । प्रकाशन भएको ८० वर्षपछि पनि देवकोटाको लक्ष्मी निबन्धसङ्ग्रहका निबन्ध उत्तिकै सान्दर्भिक छन्, उत्तिकै जीवन्त छन् ।</p>",
        "inventory": 2
    },
    {
        "id": "70",
        "title": "Muna Madan मुना मदन",
        "author": "Laxmi Prasad Devkota",
        "price": 12,
        "image": "https://files.secure.website/wscfus/10720412/33336442/muna-madan-thuprai-thumbnail-280x405-70-w273-o.jpg",
        "genre": "Poems",
        "synopsis": "<p>Muna-Madan, the most famous work in Nepali literature, is a short epic narrating the tragic story of Muna and Madan. Muna-Madan is written by Laxmi Prasad Devkota, and is said to be based on an 18th-century Newari ballad entitled Ji Waya La Lachhi Maduni.</p><p>पछिल्लो बाहिरी पृष्ठबाट महाकवि देवकोटाका केही कृतिहरू उपन्यास : चम्पा&nbsp; कथा/कहानी&nbsp; लक्ष्मी कथासङ्ग्रह&nbsp; कविता/खण्डकाव्य कञ्जिनी कृषिबाला&nbsp; गाइने गीत दष्यन्त शकन्तला भेट&nbsp; पुतली &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; भिखारी महाकवि देवकोटाका कविता&nbsp; (डा. कुमारबहादुर जोशीद्वारा सम्पादित)&nbsp; मुनामदन राजकुमार प्रभाकर रावण-जटायु युद्ध लक्ष्मी कवितासङ्ग्रह (डा. चूडामणि बन्धुद्वारा सम्पादित)&nbsp; लक्ष्मी गीतिसङ्ग्रह लूनी&nbsp; सीताहरण सुनको बिहान&nbsp; ह्मेन्दु महाकाव्य&nbsp; पृथ्वीराज चौहान वनकुसुम&nbsp; शाकुन्तल सुलोचना&nbsp; नाटक/एकाङ्की : सावित्री सत्यवान&nbsp; निबन्ध दाडिमको रूखनेर (राजेन्द्र सुवेदीद्वारा सम्पादित)&nbsp; प्रसिद्ध प्रबन्धसङ्ग्रह लक्ष्मी निबन्धसङ्ग्रह&nbsp; समालोचना स्रष्टा देवकोटा : द्रष्टा परिवेशमा (राजेन्द्र सुवेदीद्वारा सम्पादित)</p>",
        "inventory": 3
    },
    {
        "id": "69",
        "title": "Mathiko Aadesh Chha माथिको आदेश छ: हिरासतमा कविता",
        "author": "Rabindra Mishra",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33336437/mathiko-aadesh-chha-kytfmww-w1016-o.jpg",
        "genre": "Political,Poems",
        "synopsis": "<p>\"अनुभूतिलाई शब्दमा बिछ्याउँदा कविताको जुन बाटो बन्छ, रवीन्द्र मिश्र त्यो बाटोभरि इमानदार लाग्छन् । इमानदारी सौन्दर्य बनेर उनका कवितामा फुलेको छ । पत्रकारिता, परोपकार वा राजनीतिको छविबिनै यस सङ्ग्रहका कवि रवीन्द्र मिश्र पूर्ण छन् । मिश्रलाई कविताको बाटोमा दह्रो गरी खुट्टा टेकेर उभिन यो कवितासङ्ग्रह पर्याप्त छ ।\" &ndash; नवराज पराजुली, पद्मश्री साहित्य पुरस्कार विजेता कवि</p><p>&nbsp;</p><p>\"यस सङ्ग्रहमा रवीन्द्र मिश्र कवि हुन कविता लेख्दै छैनन्, कविता लेख्न कवि स्वरूपमा अवतरित छन् । कविले होइन, कवित्वले कविता लेखाएको छ । यसमा सूक्ष्म कथ्यमाथि बलियो र अटुट काव्यप्रवाह छ । मिश्र-व्यक्तित्वको साहित्यिक उचाइ हो, यो कृति । बाह्य संसारबाट कवि अन्तर्जागृतिको अन्तश्चेतनामा प्रवेश गरेका छन् । यस सङ्ग्रहमा अध्यात्मतर्फ कविको आकर्षण पनि सुन्दर, सशक्त र गहिरो रूपमा प्रकट भएको छ ।\" &ndash; डा. नवराज लम्साल, मदन पुरस्कार विजेता कवि तथा गीतकार</p>",
        "inventory": 2
    },
    {
        "id": "68",
        "title": "Mritasagar dekhi Sagarmatha samma मृतसागरदेखि सगरमाथासम्म",
        "author": "Puskar Shah",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33336417/mritasagar-dekhi-sagarmatha-samma-f-w1259-o.jpg",
        "genre": "Memoir-History",
        "synopsis": "<p><strong>पछिल्लो बाहिरी पृष्ठबाट</strong></p><p>&nbsp;</p><p>संसार घुम्नलाई एउटा जीवन काफी छैन । संसार नै त घुमेको हैन मैले तर संसारका धेरै भू-भाग घुमेको हुँ । उत्तर अमेरिकाको रक्की माउन्टेनदेखि दक्षिण अमेरिकाको एन्डिज पर्वतमालासम्म उक्लिएका क्षणहरू छन् मसँग । मुटु कमाउने माइनस पाँच डिग्री तापक्रमदेखि सहारा मरुभूमिमा पसिना निस्कँदा-निस्कँदै बाफ हुने ५० डिग्री तापक्रममा दौडिएका क्षणहरू छन् मसँग । मसँग प्रशान्त महासागरको किनारमा बालुवाको सङ्गीत सुन्दै पूर्वी साराङ्गगेट्टी र मासाईमाराका फाँटहरूमा थकाइ मारेका सुस्केराहरू छन् । फुटपाथमा मस्त निदाएका रातहरू अनि पाँचतारे होटलमा निद्रा नलागेका रातहरू पनि छन् मसँग । जङ्गलमा खान नपाउँदा सुन्तलाका बोक्रा खाएर टन्न अघाएका छाकहरू छन् मसँग अनि पिज्जा र बर्गर नरुचेका छाकहरू पनि छन् मसँग । जीवन सरल रेखा हैन र हुँदै हैन । आमाले पटुकीको मुजाबाट निकालेर दिएको एक सय रुपैयाँले मैले संसारका सारा खुशीहरू किनेर आएँ ।</p>",
        "inventory": 2
    },
    {
        "id": "63",
        "title": "Rich Dad Poor Dad धनी बुबा गरिब बुबा",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31701077/bb-b-bb-aa-w422-o.jpg",
        "genre": "General",
        "synopsis": "<p>Rich Dad Poor Dad in Nepali</p>",
        "inventory": 0
    },
    {
        "id": "62",
        "title": "मोहनी मादलको (Mohani Madalko) ",
        "author": "Shekhar Kharel",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167562/mohani-madalko-shakher-kharel-cover-design-thumbnail-280x405-70-w279-o.jpg",
        "genre": "General",
        "synopsis": "<p>by Shekhar Kharel</p><p>&nbsp;</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>कान्छाको 'हरे राम हरे कृष्ण' फिल्मको पहिलो गीत 'कान्छा रे, कान्छा रे'बाट पञ्चमजी (आरडी बर्मन)ले उसको नाम पनि 'कान्छा' राखिदिए । उसको पहाडी गीत र मादलले पञ्चमजीका गीतहरूमा दुई गुणा रस भरिदिए । आरडी बर्मनका प्रत्येक गीतमा मादल गुञ्जन थाल्यो ।</p><p>- आशा भोसले</p><p>रञ्जित दाइले सङ्गीतको रणमैदानमा विजयको ध्वजा गाडिसक्नुभएको छ । किनकि, उहाँले आजसम्म चिनेजाने सबैलाई साङ्गीतिक उपहार मात्र बाड्नुभएको छ । र, ती एकएक उपहार आणविक शक्ति लिएर प्रक्षेपित भएको मैले महसुस गरेको छु</p><p>- नीर शाह</p></div>",
        "inventory": 20
    },
    {
        "id": "61",
        "title": "एक्लो (Eklo) ",
        "author": "Buddhisagar",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167555/eklo-cover-final-final3-w1920-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>by Buddhisagar</p><p>&nbsp;</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>एक्लो श्रीको कथा हो ।</p><p>श्रीसितै जोडिएर आउने अरु मानिसको पनि कथा हो । सबैका केही न केही सपना छन् ।</p><p>सहरको यो भागदौडमा श्री कहीं पुग्न चाहन्छ । तर हिँड्न जान्दैन । ऊ केही बन्न चाहन्छ । तर कसरी बन्ने पत्तो पाउँदैन ।</p><p>एक मानिसको उतारचढावमा अनेक मानिस जोडिन्छन् । एक्लो - यो सहरमा अनेक सपना बोकेर रिङरोडभित्र फनफनी घुमिरहने पात्रहरूको कथा पनि हो । जो होहल्लामा त छन् तर आफूभित्र विराट् एक्लोपन बोकेर हिँडिरहेका छन् ।</p><p>&nbsp;</p></div>",
        "inventory": 2
    },
    {
        "id": "60",
        "title": " शून्यको मूल्य: सास, साहस र स्नेहको कथा  (Shunyako Muly) ",
        "author": "Nawaraj KC",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167543/screen-shot-2022-12-13-at-131354-w698-o.png",
        "genre": "Novel",
        "synopsis": "<p>by Nawaraj KC</p><p>&nbsp;</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>एउटा पुस्तकमा कति थोक हुन्छ ? एउटा पुस्तकले कति ठाउँमा सिरिङ्ङ पार्छ ? एउटा पुस्तकले कति ठाउँमा गला अवरूद्ध पार्छ ? एउटा पुस्तकले कति ठाउँमा आक्रोशले मुठी कस्ने बनाउँछ ?</p><p>सायद यी कुराको हिसाब कतै लेखिएको हुँदैन । तर शून्यको मूल्य पढेपछि यी सबै हिसाब गर्न मन लाग्छ । पुस्तक कर्णाली क्षेत्र वरिपरिका मानिस र तिनका कथासित जोडिएको छ । तर यसभित्रका कथाले संसारका कुनै पनि कुनाका मानिसका आत्मा नै सिरिङ्ङ पार्ने सामर्थ्य राख्छन् । पुस्तक सकिसकेपछि म अबेरसम्म टोलाइरहें । पात्रहरू यसरी हृदयमा बसेछन् कि, जाँदै जाँदैनन् । मलाई लाग्छ, लामो समयसम्म ती मसितै रहनेछन् । यसमा कथा मात्रै छैनन्, एउटा कथापछाडि कति धेरै पृष्ठभूमि हुन्छन्, तिनलाई लेखकले असाध्यै मीठो जनबोलीमा प्रस्ट्याएका छन् । यस्ता पुस्तक बिरलै लेखिन्छन्, किनभने सबै लेखक ती पात्रसम्म पुग्न नसक्लान् । सबै लेखकसित त्यति गहिराइमा पुग्ने सामर्थ्य पनि नहोला । र सबै लेखकसित त्यो हृदय पनि नहोला, जो यस पुस्तकका लेखकसित छ।</p><p>म जीवनमा थोरै मात्र पुस्तक पढ्छु भन्नेहरूले थोरै पुस्तकको पङ्क्तिमा यस पुस्तकलाई नछुटाउनुहोला ! -&nbsp;बुद्धिसागर</p><p>&nbsp;</p></div>",
        "inventory": 4
    },
    {
        "id": "59",
        "title": "सन्दुक रूइत (Sanduk Ruit) ",
        "author": "Ali Gripper",
        "price": 25,
        "image": "https://files.secure.website/wscfus/10720412/31167526/sanduk-ruit-by-ali-gripper-khagendra-sangraula-nepali-w1000-o.jpg",
        "genre": "General",
        "synopsis": "<p>by Ali Gripper, Translated by Khagendra Sangroula</p><p>&nbsp;</p><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>डा. सन्दुक रूइतको जीवनी लाखौं मानिसलाई आँखाको ज्योति प्रदान गर्ने एक नेत्र चिकित्सकको प्रेरणादायी कथा हो। यो पुस्तक संसारका चिकित्सकीय संस्थापन पक्षसँग निरन्तर जुध्दै सबैभन्दा असहाय र गरिब मानिसलाई नेत्रज्योति उपहार दिएर तिनको जीवनलाई अँध्यारोबाट उज्यालोतिर मोडिदिने अद्भूत डा. रूइतको जीवन्त एवम् रोचक कथा हो ।</p><p>यसमा विभेदकारी जातप्रथाको सबैभन्दा तल्लो तहमा हिमाली दुर्गम गाउँमा जन्मिएर कठिन प्रयत्न एवम् अथक सङ्घर्षका अनेक घुम्ती पार गर्दै संसारकै सबैभन्दा आदरणीयमध्ये एक बनेका नेत्रविशेषज्ञको जीवनवृत्तको रोमाञ्चक गाथा लेखिएको छ&nbsp;।</p><p>अस्ट्रेलियन पत्रकार अली ग्रिपरले अङ्ग्रेजी भाषमा लेखेको&nbsp;यस&nbsp;पुस्तक लेखक खगेन्द्र संग्रौलाले नेपालीमा अनुवाद गरेका हुन् ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>लाखौं मानिसलाई आँखाको ज्योति प्रदान गर्ने एक नेत्र चिकित्सकको प्रेरणादायी कथा</p><p>३० वर्षभन्दा पहिलेदेखि म डा. सन्दुक रुइतलाई चिन्छु । उनी संसारकै सबैभन्दा राम्रा जीवित नेत्र शल्य चिकित्सक र मानवतावादीहरूमध्ये एक हुन् । ज्योतिको उपहार दिदै गरेको उनलाई हेर्नु कसैले दोस्रो जीवन दिइरहेको हेर्नु हो ।</p><p>- रिचर्ड गिअर, हलिउड अभिनेता</p><p>संसारका चिकित्सकीय संस्थापनपक्षसँग निरन्तर जुध्दै सबैभन्दा गरिब र असहाय मानिसलाई नेत्रज्योति उपहार दिएर तिनको जीवनलाई अँध्यारोबाट उज्यालोतिर मोडिदिने अद्भुत डा. सन्दुक रुइतको जीवन्त एवम् रोचक कथा हो यो पुस्तक । विभेदकारी जातप्रथाको सबैभन्दा तल्लो तहमा दुर्गम हिमाली गाउँमा जन्मिएर कठिन प्रयत्न एवम् अथक सङ्घर्षका अनेक घुम्ती पार गर्दै संसारकै सबैभन्दा आदरणीयमध्ये एक बनेका नेत्रविशेषज्ञको जीवनवत्तको रोमाञ्चक गाथा यसमा समेटिएको छ । संवेदना र सम्मोहनयुक्त यो पस्तकले वैभव र विलासको जीवन होइन, संसारलाई असल बनाउने उदात्त कर्ममा लाग्ने जीवन जिउन प्रेरित गर्छ ।</p></div></div>",
        "inventory": 1
    },
    {
        "id": "58",
        "title": "महारानी (Maharani) ",
        "author": "Chandra Prakash Baniya",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167524/maharaani-chandraprakash-w588-o.jpg",
        "genre": "General",
        "synopsis": "<p>by Chandra Prakash Baniya</p><p>&nbsp;</p><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View all winners\" href=\"https://thuprai.com/books/award/madan-puraskar/\" data-v-ac2df6ee=\"\">Madan Puraskar</a></div><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View award details for the year\" href=\"https://thuprai.com/books/award/madan-puraskar/2076/\" data-v-ac2df6ee=\"\"><strong data-v-ac2df6ee=\"\">2076 BS Winner</strong></a></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>तीन शताब्दिअघिको बाइसेचौबिसे राज्यमध्ये एकको इतिहासमा स्थापित भातृद्वन्द्व, सत्ता र प्रेममा आधारित एक कुशल उपन्यास ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Baniya's novel narrates the story of King Ghanashyam of Parbat and the controversy over his successor. Malebam and Bhadribam two sons of King Ghanashyam compete for the throne of Parbat, a kingdom that existed before the time of Prithvi Narayan Shah. Malebam was elder in birth whereas Bhadribam was conceived earlier and born later. When Malebam was declared the successor of King Ghanashyam, Bhadribam revolted while his wife, to everyone's surprise, supported Malebam to get rid of Bhadribam. In recognition of her efforts to save Parbat, the palace gave her the status of \"Maharani\". But, she took Sannyasa without letting anyone know and went to Vindravan. From that time, the people of Parbat have been worshipping her as Maharani. The book also depicts the life of the people, the justice system, and the politics of Parbat.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>सुन खान सकिँदैन । हेरिकन नयनसुख लिइन्छ । मेरा निमित्त युवराज पनि सुनजस्तै मनमोहक वस्तु मात्र होइस्यो...&nbsp;।</p><p>हेर्दा चौपट्ट राम्रो, टिपेर टाउकोमा सिउरन भने नसकिन्या विशाल तलाउको मध्येमा फूल्याको कमल जस्तो मकन ठानिसेला | टिप्न नसकिए पनि पोखरीको बिचमा फूल्याको फूल मेरो हो भनिसेला ... ।</p><p>म आफू बलिवेदीमा चढ्न तयार भैदिएँ । युवराजसँग त्यसबारेमा कुरा गर्ने शक्ति सामर्थ्य मसँग छैन । मेरा निमित्त युवाराजसँग विछोड हुनभन्दा ठूलो दुख्खको कुरा अर्को के छ र ? त्यसमाथि आफैले प्रेमको डोरी चुडालन्या प्रस्ताव गर्न सक्तिन । सामर्थ्यभन्दा ठूलो जिम्मेवारी मकन नदिस्योस् । दुई प्रेमीहरु सगोलमा साझा मृत्युवरण गर्न तयार हुन सक्छन् । छुट्टिन्या सल्लाह गर्न सक्तैनन् । राजकुमारीले आँसु चुहाउँदै दुई हात जोडेर प्रार्थना गरिन् ।</p></div></div></div><p>&nbsp;</p>",
        "inventory": 5
    },
    {
        "id": "57",
        "title": "स्वप्नभूमि (Swapna Bhoomi)",
        "author": "Tulasi Acharya",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167515/swapnabhumi-w843-o.jpg",
        "genre": "General",
        "synopsis": "<p>by Tulasi Acharya</p><p>&nbsp;</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>धन र सुख प्राप्त होला भनेर हुन्छ भनेर विदेशिएका नेपालीहरूले बाहिरी देश पुगेपछि नेपालको महत्त्व र आफ्नो खुसी बुझेर देश फर्केको एक युवकको कथा यो उपन्यासले बोकेको छ । विदेशमा बस्ने नेपालीले भोगेको संस्कृति र नेपाली समाजमा कामको आधारमा गरिने विभेदलाई पनि उजागर गर्न खोजिएको छ।</p></div>",
        "inventory": 5
    },
    {
        "id": "56",
        "title": "समभोक (Sama Bhok)",
        "author": "Shiva Prakash",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167502/samabhok-s0nr9vp-w521-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>by Shiva Prakash</p><p>&nbsp;</p><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>शिव प्रकाशकृत पहिलो उपन्यास हो, समभोक । यसमा भोक, भोग र सम्भोगको बिछट्ट संसार छ। समभोकले आप्रवासी जीवनको अर्को पाटोको अथः र इति उतारेको छ। यसलाई आख्यानको आविष्कार पनि भन्न सकिन्छ । चिरनूतन विषय, प्रयोग, झरिलो भाषा र सूक्ष्म शैलीमा विरचित यो उपन्यास हातमा लिएपछि पाठकले बिसाउने मेसो पाउँदैनन् ।</p><p>संसारमा भोक, भोग र सम्भोग गरी तीन कुरा अजम्बरी छन्। यही विषयभित्र रहेर लेखकले दर्शन र भोकका विषयमा गहन रूपमा&nbsp; पुस्तक लेखेका छन्&nbsp;।&nbsp;शारीरिक भोक, पैसाको भोक, यौनको भोक सबै यसमा देखाइएको छ</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>भोकले साइनो बदल्छ । भोकले सम्बन्ध बदल्छ । भोकले नाम बदल्छ । भोकले काम बदल्छ । भोकले मान्छे बदल्छ । भोकले संसार बदल्छ ।<br />&lsquo;भोक आफैँमा कति भोको छ ? भोकभित्र कति भोक बाँचेका छन् ? कति भोक भोकै छन् ? कति भोकले भोक मेटेका छन् ? कति भोक भोकै मरेका छन् ?&rsquo;<br />जङ्गलमा एक्लै बसेको मान्छे र शहरको एउटा कुनामा एक्लै उभिएको रूख एकै हो। समुदायको मान्छेभन्दा जङ्गलको मान्छे छिट्टै मर्न सक्छ शहरको एक्लो रूख पनि त्यस्तै हो, मान्छेजस्तै छिट्टै ढल्न&nbsp;।</p></div></div>",
        "inventory": 10
    },
    {
        "id": "55",
        "title": "अर्को भोर (Arko Bhor) ",
        "author": "Keshav Raj Gnawali",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167480/arko-bhor-f-w1499-o.jpg",
        "genre": "Stories,Short Stories",
        "synopsis": "<p>by Keshav Raj Gnawali</p><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View all winners\" href=\"https://thuprai.com/books/award/padmashree-shahitya-puraskar/\" data-v-ac2df6ee=\"\">Padmashree Sahitya Puraskar</a></div><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View award details for the year\" href=\"https://thuprai.com/books/award/padmashree-shahitya-puraskar/2078/\" data-v-ac2df6ee=\"\"><strong data-v-ac2df6ee=\"\">2078 BS Winner</strong></a></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>यो कथा संग्रह भित्र १४ वटा कथाहरु समावेश छन । यी मध्ये अधिकांश कथाहरुले नेपाली-अमेरिकी अनुभवलाई उजागर गरेको छ भने केही कथाहरु नेपालको द्वन्दसँग जोडिएका छन ।</p></div></div>",
        "inventory": 20
    },
    {
        "id": "54",
        "title": " टुवरा  (Tuwara) ",
        "author": "Manoj Agyat",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31167477/img-7955-w1310-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>by Manoj Agyat</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>थारू शब्द &lsquo;टुवरा&rsquo;को अर्थ &lsquo;टुहुरा&rsquo; भन्ने हुन्छ । यसमा निमुखा थारू किसानको कथाब्यथासहित छुतवर्गको कथा समेटिएको छ।&nbsp;थारू समुदायका दैनिकी, क्रान्ति र सपनालाई&nbsp; पनि &lsquo;टुवरा&rsquo;मा उल्लेख गरिएको छ।</p></div>",
        "inventory": 20
    },
    {
        "id": "53",
        "title": " मेरा नौ दशक: पाँच व्यवस्था, पाँच राजा र पाँचपटक प्रधानमन्त्री (Mero Nau Dashak) ",
        "author": "Surya Bahadur Thapa",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/31047620/mera-nau-dashak-f-w1787.jpeg",
        "genre": "Biography,Political,Memoir-History",
        "synopsis": "<div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">by Surya Bahadur Thapa, Edited by Hari Bahadur Thapa</h2><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>पाँच व्यवस्था र पाँच राजाको शासन भोगेका र पाँचपटक प्रधानमन्त्री भएका सूर्यबहादुर थापाको जीवन भोगाइका विविध आयामहरूलाई पुस्तकमा ८ खण्डमा प्रस्तुत गरिएको छ ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>राणाशासनको अन्तिम प्रहरमा राणा दरबारमै शैशवकाल बिताएका उनी कलिलै उमेरमा सल्लाहकार सभाको अध्यक्ष भई राजनीतिमा छिरे । राजा महेन्द्रको विश्वस्त पात्र भई पञ्चायतको जग हाल्न सघाए । मन्त्री, मन्त्रिपरिषद्को अध्यक्ष अनि प्रधानमन्त्री भई पञ्चायतलाई सङ्गठित बनाए । त्यही पञ्चायती व्यवस्थामा उनी जेल गए, कोपभाजनमा परे । उनैले बहुदल रोक्दै निर्दललाई जनमत सङ्ग्रहमार्फत पञ्चायती व्यवस्थालाई वैध तुल्याए ।</p><p>बहुदलपछि पूर्वपञ्चहरूलाई सङ्गठित गरी पुनः सरकार चलाए | राजा ज्ञानेन्द्रको सक्रिय शासनकालमा पुनः प्रधानमन्त्री भए, माओवादीसँग वार्ताको प्रयत्न गरे; असफल भए । दोस्रो जनआन्दोलनपछि 'बहिष्कृत जस्तै बनाइएका उनी ज्येष्ठ सदस्यको हैसियतमा दोस्रो संविधान सभाको पहिलो बैठकको अध्यक्ष बने ।</p><p>पाँच व्यवस्था, पाँच राजा भोगेका र पाँचपटक प्रधानमन्त्री भएका सूर्यबहादुर थापाको साढे पाँच दशक लामो अविच्छिन्न राजनीतिक जीवन यात्राको दस्तावेज हो</p></div></div>",
        "inventory": 3
    },
    {
        "id": "52",
        "title": "ऋतंभरा (Ritambhara)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30861002/ritambhara-w494.jpeg",
        "genre": "Poems,महाकाव्य",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Ritambhara</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span> <span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/madhav-prasad-ghimire/\" data-v-ac2df6ee=\"\">Madhav Prasad Ghimire</a></span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>ऋतंभरा राष्ट्रकवि माधव घिमिरेको अन्तिम&nbsp;कृति हो । ऋग्वेदमा उल्लेख गरिएको आख्यानलाई आधार बनाई लेखिएको यस महाकाव्यमा श्यावाश्व र ऋतंभराको प्रेम सम्बन्धमा आधारित छ ।</p><p>राष्ट्रकवि घिमिरेको शकुन्तला, मालती मंगले, हिमालपारि हिमालवारिलगायतका गीतिनाटक, आफ्नो बाँसुरी आफ्नै गीत, चारु चर्चालगायका निबन्ध र बाला लहरी, बिजुले र बिजुलालगायतका बालरचना छ।</p><p>उनका इन्द्रकुमारी, किन्नर किन्नरी, गौरी, चैत वैशाख, राजेश्वरी, राष्ट्रनिर्माता र विषकन्या लगायतका कृति पनि निकै चर्चित छन्।</p></div></div>",
        "inventory": 0
    },
    {
        "id": "51",
        "title": "जनताको बहुदलीय जनबाद - फरक बहस (Janatako Bahudaliya Janabad-Farak Bahas)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30860967/img-7171-2-w1920-o.jpg",
        "genre": "Political",
        "synopsis": "<p>Janatako Bahudaliya Janabad-Farak Bahas</p><p>by&nbsp;Ghanendra Ojha</p>",
        "inventory": 25
    },
    {
        "id": "50",
        "title": "सडक (Sadak)",
        "author": "Kamal Sangharsh",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30860938/img-7170-w1920-o.jpg",
        "genre": "गजलसङ्ग्रह",
        "synopsis": "<p>Sadak</p><p>by Kamal Sangharsh</p>",
        "inventory": 7
    },
    {
        "id": "49",
        "title": "विचारभन्दा माथि देश (Bichar-bhanda maathi Desh)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30854375/bicharbhanda-maathi-desh-w1331.jpeg",
        "genre": "Political,Literature/Essays",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Bichar-bhanda maathi Desh</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span> <span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/rabindra-mishra/\" data-v-ac2df6ee=\"\">Rabindra Mishra</a></span></div>",
        "inventory": 3
    },
    {
        "id": "48",
        "title": "फिरफिरे (Phirphirey)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30854372/ferfhere-perfect-w1543-o.png",
        "genre": "Novel",
        "synopsis": "<div data-v-ac2df6ee=\"\"><div class=\"book-intro\" data-v-ac2df6ee=\"\"><h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Phirphirey</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span> <span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/buddhisagar/\" data-v-ac2df6ee=\"\">Buddhisagar</a></span></div><hr data-v-ac2df6ee=\"\" /></div><div class=\"columns buy-blocks is-mobile\" data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View all winners\" href=\"https://thuprai.com/books/award/madan-puraskar/\" data-v-ac2df6ee=\"\">Madan Puraskar</a></div><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View award details for the year\" href=\"https://thuprai.com/books/award/madan-puraskar/2072/\" data-v-ac2df6ee=\"\">2072 BS Shortlist</a></div></div><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>One day, Basanta hears that his house in the village is&nbsp;about to be demolished. Overwhelmed with nostalgia, he goes&nbsp;back to his village to see the house one last time after 16 long&nbsp;years. And then begins a journey to his past&ndash;a past that he&nbsp;has always wanted to forget. And thus unfolds the story of&nbsp;his friendship with Pawan, who falls prey to village politics&nbsp;and superstitions, losing his memory in the process. This story&nbsp;is multilayered with the stories of the loving Jethiaama, the&nbsp;snake killer Chilgadi, the goon Rocky Dada, the village shaman&nbsp;Kohinoor&ndash;all colorful characters who delight and surprise&nbsp;readers in equal measure.Written in a sweet, flowing language, Firfire brings back&nbsp;the kaleidoscopic memories of our individual pasts.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>त्यो मोजाको फुटबल त्यो हरियो चउर त्यो खोलाको पौडी त्यो बालुवाको घर त्यो असारे झरी त्यो सपनाको लहर सम्झना छ साथी? त्यो न्यु इयरको पोस्टकार्डमाथि रङ्गीन अक्षर |</p><p>समयले भयो बाटो अलग-अलग हिंड्यों अलग-अलगै सहर अझै पनि आउँछ आँखा भरिभरि बाल्यकालको लहरै-लहर त्यो चुंडिएको चङ्गा त्यो पातको फिरफिरे 'सर्किंदैन बिर्सन, जत्ति कोसिस गरे ।2</p></div></div>",
        "inventory": 5
    },
    {
        "id": "47",
        "title": "महाभारा (Mahabhara)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30854371/mahabhara-w459.jpeg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Mahabhara</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span> <span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/basanta-basnet/\" data-v-ac2df6ee=\"\">Basanta Basnet</a></span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div class=\"columns awards mt-1 mb-2\" data-v-ac2df6ee=\"\"><div class=\"column is-paddingless\" data-v-ac2df6ee=\"\"><div class=\"box columns is-mobile\" data-v-ac2df6ee=\"\"><div class=\"column\" data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View all winners\" href=\"https://thuprai.com/books/award/madan-puraskar/\" data-v-ac2df6ee=\"\">Madan Puraskar</a></div><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View award details for the year\" href=\"https://thuprai.com/books/award/madan-puraskar/2078/\" data-v-ac2df6ee=\"\">2078 BS Shortlist</a></div></div></div></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>प्रेम, राजनीति र धर्मको त्रिकोणात्मक द्वन्द्वमा बुनिएको महाभारा मूलतः डुक्पाको कथा हो । डुक्पा उटपट्याङ गरिबस्छ । पढ्नमा लद्दु तर &lsquo;डुक्पा डान्स&rsquo;का लागि चर्चित छ । पालाम गाएरै सोल्टिनीहरूको प्रिय छ । त्यही डुक्पा अकस्मात् प्रेमिका सुक्मतीलाई छाडेर ड्राइभरी गर्न मधेस झर्छ । नचाहेरै उसको जिन्दगीमा युद्धको छिर्का छ्यापिन पुग्छ । उसले आफ्नो निर्णयप्रति सुक्मतीको घृणा बुझ्न पाउँछ, लारुम्बाको धार्मिक दस्ता काम्राङ र माओवादीबीचको तिक्तता अनुभव गर्छ । एक दिन उसको भेट आफ्नी प्रेमिका मन पराउने तान्छोहाङसँग हुन्छ, जसले उसको बाटो नै मोडिदिन्छ ।</p><p>मधुर पूर्वेली लबज र नेपाली साहित्यमा बिरलै देखिने सशक्त संवादको मीठो सम्मिश्रण हो, महाभारा ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>The Mahabharata is a novel set in eastern Nepal during a people's war. The Mahabharata is the story of Dukpa, which is intertwined in its triangular conflict of love, politics, and religion. He is mischievous and poor in studies but is popular in his community for his 'Dukpa dance'.</p><p>He is also popular with women for his Palam songs. But he moves to the Terai region and leaves his girlfriend. The story tells the story of how the eastern hills and their people suffered during the Maoist insurgency.</p></div></div></div>",
        "inventory": 5
    },
    {
        "id": "46",
        "title": "मायाका मसिना अक्षर  (Maya-ka Masina Akshar)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30854370/mayaka-masina-akshar-by-suresh-badal-f-w1535.jpeg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Maya-ka Masina Akshar</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span> <span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/suresh-badal/\" data-v-ac2df6ee=\"\">Suresh Badal</a></span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>लेखनमा रुचि भएको दिवस र काठमाडौमा सङ्घर्ष गरिरहेकी रुबाबीच फेसबुकबाट सुरु भएको सम्बन्ध जिस्किँदा जिस्किँदै मायामा परिणत हुन्छ । माया गहिरिदै जाँदा रुबालाई लाग्छ, दिवससँग उसले आफ्नो विगत कोट्याउनुपर्छ । तर रुबालाई के थाहा, त्यसरी इमानदारीपूर्वक खोतलिएको विगत नै कुनै दिन दिवसका लागि टाढिने बहाना बन्ला भनेर । रूपमा बहाना जेसुकै होस्, सारमा त महत्त्वाकाङ्क्षा र धोका नै हुन्छ दूरीको कारण । रुबाको जीवनबाट टाढिदै गर्दा दिवस यस्तो गम्भीर मोडमा पुग्छ, जहाँ उसले साँचो प्रेम सतहमा होइन, हृदयको गहिराइमा भेटिन्छ भन्ने महसुस गर्छ ।</p><p>आकर्षण र प्रेम, सही र गलत, नैतिकता र व्यावहारिकता अनि भ्रम र प्रेमको मझधारमा बग्ने मायाका मसिना अक्षरले हामीलाई आफ्नै प्रेमको आत्मसमीक्षा गर्न बाध्य पार्छ ।</p></div></div>",
        "inventory": 5
    },
    {
        "id": "44",
        "title": "सम्बन्धहरू (Sambandhaharu)",
        "author": "media person and Madan Puraskar winning writer Vijay Kumar",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30854359/sambandhaharu-by-vijay-kumar-w1524.jpeg",
        "genre": "Literature/Essays",
        "synopsis": "<div class=\"book-intro\" data-v-ac2df6ee=\"\"><h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Sambandhaharu</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span> <span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/vijay-kumar/\" data-v-ac2df6ee=\"\">Vijay Kumar</a></span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>जीवनको अस्थायीपनको किताब हो, यो । अनित्य र क्षणिकताबीच पनि प्रेम, साहस र अमरत्वको खोज हो, यो कृति । कोरोना लकडाउनभन्दा दुई महिनाअघि छापिन तयार अवस्थामा रहेको यो किताब पढ्दा पाठक छक्क पर्नेछन; कति सुस्तरी गुनगुनाएर पनि मनै हल्लाउँछ सम्बन्धहरुले । मदन पुरस्कारप्राप्त बेस्ट सेलर खुसीपछि लेखकको यो दोस्रो कृति सिर्जनात्मक गैरआख्यान शैलीमा बुनिएको एक बेजोड रचना&nbsp;हो ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Sambandhaharu is another highly anticipated book by media person and Madan Puraskar winning writer Vijay Kumar.&nbsp;</p></div></div></div><hr data-v-ac2df6ee=\"\" /></div><div class=\"columns buy-blocks is-mobile\" data-v-ac2df6ee=\"\">&nbsp;</div><p>&nbsp;</p>",
        "inventory": 4
    },
    {
        "id": "43",
        "title": "कथाकी पात्र (Kathaki Patra)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825544/kathaki-patra-w700-o.jpg",
        "genre": "Stories",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Kathaki Patra</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Subin Bhattarai</span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>अधिकांश कथा सहरिया युवापुस्ताको दिनचर्या, रोमान्स, यौन, कलेज गसिप, विभिन्न सम्बन्धका आयाममा केन्द्रित छन् । मान्छेका अन्तरकुन्तर छिचोलेर त्यसलाई कौतुहलपूर्ण रुपमा प्रस्तुत गर्नु सुबिनको विशेषता हो । अरुको ख्यालै नगरेका सामान्य एवं सुक्ष्म विषयलाई टिपेर कथाको बान्की दिन सुबिन खप्पिस देखिन्छन् । उनका कथा सरल भइकन पनि व्यङ्ग्यबोधी, सटिक अनि अर्थपूर्ण र दर्शनयुक्त लाग्छन् । कथाका कतिपय पात्रले पाठकको मनलाई कैयौँ दिनसम्म चिमोटिरहन्छन् ।&nbsp;</p></div></div>",
        "inventory": 2
    },
    {
        "id": "42",
        "title": "Summer Love (English)",
        "author": "Subin Bhattarai",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825575/summerlove-english-w200-o.jpg",
        "genre": "Novel",
        "synopsis": "<p>&nbsp;by Subin Bhattarai</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">From the backcover</h2><div data-v-ac2df6ee=\"\"><p>At the Central Department of Environmental Science to check the result of the entrance examinations for a Master&rsquo;s program, Atit sees a name on top of the list: Saaya. The name itself fascinates him and he tries to give face to the name. When he finally sees her, he is immediately floored by her Cadbury lips, sexy figure and intellect and thus begins their college romance. The romance blossoms into love. But does their love story end on a happy note?</p></div>",
        "inventory": 2
    },
    {
        "id": "41",
        "title": "Subin Bhattarai-Bundle",
        "author": "Unknown Author",
        "price": 110,
        "image": "https://files.secure.website/wscfus/10720412/30825535/subin-budle-w565-o.jpg",
        "genre": "General",
        "synopsis": "<p>Five books Kathaki Patra, Summer Love, Saya, Priya Sufi, and Ijoriya&nbsp;</p><p>&nbsp;</p><p>Use code: \"<strong>subin-bundle\"</strong> to get a bundle discount</p>",
        "inventory": 2
    },
    {
        "id": "40",
        "title": "नि हाउ ! नमस्ते ! (Ni Hau ! Namaste !)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825454/ne-hau-w280-o.jpg",
        "genre": "Travel Memoir",
        "synopsis": "<h1 class=\"title\">Ni Hau ! Namaste !</h1><p>लक्ष्मी लम्साल (लक्ष्मीपूजा)</p><p>&nbsp;</p><p>यात्रा संस्मरण र अनुभूति समेटिएको यो पुस्तकले शुरुदेखि अन्त्यसम्म पाठकलाई तानिरहन्छ ।&nbsp;</p><p>&nbsp;</p>",
        "inventory": 2
    },
    {
        "id": "39",
        "title": " जलान: लघुकथा सङ्ग्रह (Jalan)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825447/jalan-by-bidur-chalise-front-cover-w1393-o.jpg",
        "genre": "Short Stories",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Jalan</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Dr. Bidur Chalise</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p><strong>प्रकाशित कृति :</strong></p><ul><li>युगबोल्छ (कवितासङ्ग्रह) - २०४७</li><li>सिसिफसको श्रापित मांसपिण्ड (लघुकाव्य) - २०५१</li><li>अभिलेखीय नेपाली क्रिया (अनुसन्धान ग्रन्थ) - २०७०</li><li>ऐतिहासिक नेपाली अव्यय (अनुसन्धान ग्रन्थ) - २०७०</li><li>अभिलेखीय नेपाली व्याकरणको इतिहास (अनुसन्धान ग्रन्थ) - २०७४</li><li>सेनेगल (कवितासङ्ग्रह) - २०७४</li><li>अभिलेखीय नेपाली नामधातु (अनुसन्धान ग्रन्थ) - २०७४</li><li>स्मृतिका पहाड (कवितासङ्ग्रह) - २०७५</li><li>कोशीका उडान (कवितासङ्ग्रह) - २०७५</li><li>चियाङमाईको डबली (कवितासङ्ग्रह) - २०७५</li><li>रातो चामल (लघुकथा सङ्ग्रह) - २०७६</li><li>थुप्रै पत्रिका, समालोचनात्मक लेख, कविता, कथा सम्पादन तथा प्रकाशन</li></ul></div></div>",
        "inventory": 3
    },
    {
        "id": "38",
        "title": "डुमेरो (Dumero)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825442/dumero-front-w880-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Dumero</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Sarala Gautam</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>सरला गौतम सामाजिक सरोकारमा चाख राख्ने स्वच्छन्द कलमजीवी हुन् । सुरूमा&nbsp;रेडियोमार्फत पत्रकारिता क्षेत्रमा प्रवेश गरेकी उनी विभिन्न पत्रपत्रिकामार्फत अभिव्यक्त हुँदै आएकी छन् । समाजशास्त्रमा स्नातकोत्तर सरला यात्रालाई समेत समाज पढ्ने साधना ठान्छिन् । 'डुमेरो' उनको पहिलो आख्यान हो ।</p></div></div>",
        "inventory": 2
    },
    {
        "id": "37",
        "title": "रुकमाङ्गद कटवाल: आत्मकथा (Rookmangud Katawal )",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825437/rk-fc-w1920-o.jpg",
        "genre": "Biography",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Rookmangud Katawal</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Rookmangud Katawal</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>एकजना सेनापतिको जीवनकथा भए पनि यो माओवादी द्वन्द्व बिसर्जनसम्मको&nbsp;नेपाली सेनाको&nbsp;उथलपुथलको वृत्तान्त हो ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>This book is a story of former General of Nepalese Army. The book includes a sensational opening as 45-page prologue and 11 other chapters that tell the stories of his childhood, student life and career in army, the Maoist conflict, the royal take over, and the events after the Maoists came to the peace process.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>'तपाईं र मेरो कस्तो केमेस्ट्री मिल्छ है,' प्रधानमन्त्री प्रचण्डले कुरा सुरु गर्नुभयो, 'जम्मा तीन महिना हो, दाइले आर्मीचाहिँ छाड्दिनुपर्यो&nbsp;&nbsp;।'</p><p>'म त कर्मठ सिपाही हुँ। मोर्चा छाडेर भाग्दिनँ '</p><p>'हत्तेरी ! ४०/४५ वर्ष देशको सेवा गरिसक्नुभयो, अब कति नै बाँकी छ र !' उहाँले फेरि भन्नुभयो, 'महिनादिनमा न्युयोर्कको राजदूत खाली हुँदैछ, आजैको क्याबिनेटबाट पास गराइदिन्छु ।'</p><p>'राजदूत त के, इन्द्रको आसन दिए पनि चाहिएन ।'</p></div></div></div>",
        "inventory": 2
    },
    {
        "id": "36",
        "title": " कोरियाना कफी गफ (Koreana - Coffee Guff)",
        "author": "Narayan Wagle",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825413/koreana-coffee-guff-front-w504-o.jpg",
        "genre": "Literature/Essays",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Koreana - Coffee Guff</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Narayan Wagle</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><div>लेखक-पत्रकार नारायण वाग्लेको सृजनात्मक गैर-आख्यान !</div><div>&nbsp;</div><div>वाग्लेले&nbsp;यस&nbsp;पुस्तकमा&nbsp;दक्षिण कोरियामा एक लेखन शिविरमा आफूले गरेका अनुभूतिहरुलाई जीवन र जगतको विभिन्न बस्तुहरुसंग समाहित गरेर लेखेका छन्&nbsp;।&nbsp;</div></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>नारायण वाग्ले पेसाले पत्रकार हुन् । उनका लागि साहित्य व्यसन । &lsquo;पल्पसा क्याफे&rsquo; का लागि मदन पुरस्कार पाए । दोस्रो उपन्यास &lsquo;मयुर टाइम्स&rsquo; लेखे । उनलाइ पाठकमाझ बढि चिनाउने &lsquo;कफी गफ&rsquo; शैलीमा लेखिएको यो उनको पहिलो पुस्तकाकार कृति हो ।</p><p>यात्रा, प्रेम, कफिघर, सम्झना, राजनिती र समाज उनका प्रिय पैदल खुराक हुन् । यो गैरआख्यान दक्षिण कोरियाको एउटा अन्तराष्ट्रिय सिर्जनशील लेखन कार्यशालाको अनुभवमा आधारित छ ।</p></div></div></div><div data-v-ac2df6ee=\"\">&nbsp;</div>",
        "inventory": 2
    },
    {
        "id": "35",
        "title": " परित्यक्ता (Parityakta)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825406/parityakta-by-bhuwan-dungana-front-w1357-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Parityakta</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Bhuwan Dhungana</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><span style=\"color: inherit; font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 24px; letter-spacing: initial; background-color: rgba(0, 0, 0, 0);\">पुस्तकको बारेमा</span></div></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><p>एकालाप शैलीमा बाधिएको यस पुस्तकमा एउटी महिलाको अन्तर चेतनाको परिदृश्यलाई उजागर गरिएको छ;&nbsp;जसले छोरी,&nbsp;प्रिया,&nbsp;पत्नी अनि आमाको बहुआयामिक भूमिकामा अभिनय गर्दै बाँचेकी हुन्छे र पनि निरन्तर एकाकीपनको भावमा ठोक्किँदै बगेको झरना जस्तै हुन्छे । पुस्तकले एउटी महिला जो वास्तवमा समाजद्वारा तोकिएको भूमिकामा मात्र समाहित हुन बाध्य छे;&nbsp;समाजमा उसको निजत्वको पनि कुनै भूमिका छ कि छैन भन्ने प्रश्न गर्दछ । यो कृतिले महिलाले आफ्ना उद्देश्यलाई आफैले पूरा गर्ने प्रयत्न गर्नु पर्छ भन्नेतर्फ संकेत गर्दछ ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>भुवन कोइरालाका नामले सुरुमा साहित्यिक जगतमा&nbsp;परिचित भुवन ढुङ्गानाको जन्म विराटनगरमा भएको हो । बाल्यकालको शिक्षादीक्षा बनारसमा पाएकी उनले विश्वभारती विश्वविद्यालय, शान्ति निकेतनबाट नृत्य र बङ्गाली भाषामा स्नातक र त्रिविबाट अङ्ग्रेजी साहित्यमा&nbsp;स्नातकोत्तर गरेकी छन् । पञ्चायतकालमा 'सिउँडी' साहित्यिक त्रैमासिकको सम्पादनसमेत गरेकी उनको युद्धको घोषणा गर्नुभन्दा अघि र 'धर्मविम्ब' कथासङ्ग्रह प्रकाशित छन् । बीपी कोइराला साहित्य सम्मानलगायत थुप्रै पुरस्कारप्राप्त उनको यो पहिलो उपन्यास हो ।</p></div></div></div>",
        "inventory": 2
    },
    {
        "id": "34",
        "title": "कुमारी प्रश्नहरु (Kumari Prashnaharu)",
        "author": "Unknown Author",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/30825397/kumari-prashnaharu-by-durga-karki-front-w1000-o.jpg",
        "genre": "Stories",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Kumari Prashnaharu</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Durga Karki</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>&lsquo;कुमारी प्रश्नहरू&rsquo;&nbsp;सामाजिक यथार्थवादको कोणबाट लेखिएका १३ वटा कथाहरूको सँग्रह हो&nbsp;। आफ्नो लेखन मार्फत लेखक कार्कीले सामाजिक न्यायको मुद्दामा चलाखीपूर्ण तरिकाले प्रस्तुत खोज्नु भएको छ । लिङ्गभेदका विसंगतीलाई उमेर अनुसारका महिला पात्रका दृष्टिकोणबाट अभिव्यक्त गर्नु भएको छ ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>दुर्गा कार्कीको पढाइ कानून हो, रूचि लेखन | साहित्य उनको उपासना हो जसमा कथा उनको आफ्नै शैली र शिल्पले सशक्त बन्छन् । उनको यो पहिलो कृति हो ।</p></div></div></div><div data-v-ac2df6ee=\"\">&nbsp;</div>",
        "inventory": 5
    },
    {
        "id": "33",
        "title": " प्वाँख (Pwakh)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825383/pwaankh-front-w1559-o.jpg",
        "genre": "Poems",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Pwakh</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Nabin Prachin</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>\"'प्वाँख' भित्रका नवीनका सबै कविता मैले पहिल्यै सुनिसकेजस्तो लाग्छ । सायद मेरो हृदयको अन्तर्ध्वनि थियो । उसका सबै कविता मैले पहिल्यै देखिसकेजस्तो लाग्छ । सायद मेरो हृदयको अन्तर्झिल्का थियो । तर कत्ति चाहेर पनि कतै पढ्न पाएको थिइनँ । आज कविताले नवीनलाई चुन्दा ती अन्तर्ध्वनि र अन्तर्झिल्काले भाषा पाएका छन् ।\"<br />-&nbsp;नवराज पराजुली</p><p>&nbsp;</p><p>\"के कविताहरू प्वाँखजस्तै हलुका भईकन पनि बोधको गहनताले भरिएका हुन सक्छन् ? जीवनको चञ्चलताले भरिएका हुन सक्छन् ? भर्खर जन्मेको नानी समाएजस्तै गरी संवेदनशील भएर बिस्तारै समाउनुपर्छ उसका कविताहरू, नत्र कवितालाई दुख्छ । अलिकति जोडले पढ्यो भने पनि उसका कविताहरूलाई दुख्छ । शब्द मात्रै पढ्यो भने पनि उसका कविताहरूलाई दुख्छ । बेस्सरी पाना पल्टाउँदा वा कुनै अर्को किताबको मुनि थिचेर राख्दा पनि उसका कविताहरूलाई दुख्छ । उसका कवितालाई अपनाउन मान्छेमा कम्तीमा आमाको त्यो संवेदनशीलता जरुरी छ ।\"<br />-&nbsp;नदीश</p></div></div>",
        "inventory": 4
    },
    {
        "id": "32",
        "title": " विनोद चौधरी: आत्मकथा (Binod Chaudhary)",
        "author": "as a singer and a filmmaker",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825369/bc-fc-w1575-o.jpg",
        "genre": "Biography",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Binod Chaudhary</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Binod Chaudhary</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>एसएलसीमा बोर्ड पाँचौं भएका विनोद चौधरीले पारिवारिक कपडा व्यापारको घेरोबाट बढेर डिस्को खोले । एल्बम निकाले । फिल्म बनाए । वाइवाइ । उत्पादन थाले । उनको चौधरी ग्रुप अहिले बैंक, बिमा, फाइनान्स र हाउजिङदेखि सफ्ट ड्रिङ्क, बियर, चुरोट, खाद्यवस्तु र इलेक्ट्रोनिक सामग्री उत्पादनसम्म फैलिएको छ । उनले निजी क्षेत्रको पहिलो औद्योगिक पार्क । 'गंगादेवी चौधरी उद्योग ग्राम' स्थापना गरेका छन् ।</p><p>चौधरीले विदेशीसँगको साझेदारीमा दक्षिण तथा दक्षिणपूर्वी एसिया र मध्यपूर्वका होटल, रियलस्टेट र उत्पादनमूलक क्षेत्रमा लगानी गरेका छन् । भारतको ताज ग्रुप र थाइल्यान्डको इनभिजनसँग संयुक्त लगानी गरेका छन् । शाही परिवार, प्रधानमन्त्री तथा नेताहरुदेखि प्रभावशाली विदेशी व्यवसायीहरूसम्मको उनको नालीबेली सम्बन्ध चाखलाग्दो छ ।</p><p>चौधरी अमेरिकाको फोर्ब्स पत्रिकाले सार्वजनिक गरेको सन् २०१३ का विश्व अर्बपतिहरूको सूचीमा सामेल । पहिलो नेपाली व्यवसायी हुन् । यो आत्मकथा विनोद चौधरी सँगसँगै नेपालको एक अग्रणी व्यापारिक घराना चौधरी ग्रुपको आरोह -अवरोहको गाथा हो ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>The autobiography covers Chaudhary&rsquo;s life from a student at a government school in Gana Bahal, playing and growing in the streets of Khichapokhari, running a discotheque, pursuing a hobby as a singer and a filmmaker, leading the Nepali business community, expanding beyond Nepal and reaching a place where any other Nepali is yet to reach.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>'विनोद, मैले एपोलो स्टिलको सेयर गोल्छालाई दिने निर्णय गरें ।'</p><p>'सरकार, यस्तो कसरी गर्न सकिबक्सिन्छ ?' 'किन सक्दिनँ ?' अधिराजकुमारी प्रेक्षाले हकार्नुभयो ।</p><p>आवरण तस्बिर : किशोर कायस्थ</p><p>'यो उद्योगमा मेरो ५१ प्रतिशत सेयर छ, धीरेन्द्र सरकारले देखाइबक्सेको सदासयका कारण ४८ प्रतिशत सेयर दिएको हुँ, मौसुफ कसरी एकैचोटि जसलाई पायो त्यसलाई सामेल गराउन सकिबक्सिन्छ ?'</p><p>'ह्वाट !' उहाँले झोक्किदै भन्नुभयो, 'सो यु आर गोइङ टु डिसओबे माई अर्डर ?'</p><p>'म चाहेर पनि मौसुफको आदेश पालना गर्न सक्दिनँ सरकार ।'</p><p>'ह्वाट डु यु मिन ?' 'मैले यो उद्योग चलाउन बैंकबाट ऋण लिएको छु । बैंकले मेरै नाममा ऋण दिएको छ ।'</p><p>'सो ह्वाट !' उहाँले अनुहार रातो पार्नुभयो । बुवा तर्सिनुभएछ । हात समातेर मलाई रोक्न खोज्नुभयो । म रोकिइनँ ।</p></div></div></div>",
        "inventory": 2
    },
    {
        "id": "31",
        "title": " फूलको आँखामा (Phoolko Aankhaama)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825302/phool-ko-aakhama-fc-w1575-o.jpg",
        "genre": "Biography",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Phoolko Aankhaama</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\">Ani Choying Drolma</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Ani Choying Drolma was born in Bouddha. Her childhood was full of suffering and she grew up with much pain and complexity. To get rid of the pain due to her father&rsquo;s death, she went into a monastery and later became a Buddhist nun. She learnt spiritualism, monasticism, and the meaning of loyalty, truth, patience and forgiveness. Today, she stands as a leading role of peace and harmony in the world. This autobiography is the twelfth translation of the original French edition.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>काठमाडौंको बौद्धमा जन्मेहुर्केकी उनको बाल्यकाल कष्टप्रद थियो । बाबुको यातनाबाट मुक्ति पाउन उनी गुम्बा पसिन् र आनी छोइङ बनिन् । गल्ती गर्नेहरू आवेगका रोगी हुँदा रहेछन् भन्ने बुझ्न थालिन् । करूणा, क्षमाशीलता र धैर्यको पाठ सिकिन् । बुद्ध मन्त्र गाउँदै जाँदा आज उनी विश्वमाझ शान्ति र सुन्दर कामनाको सुमधुर नेपाली आवाज बन्न पुगेकी छन् ।</p><p>यी असाधारण नेपाली चेलीको यो आत्मकथा फ्रान्सेली भाषामा पहिलो पल्ट प्रकाशन भएको थियो । आनीको हृदयस्पर्शी कथा अनुवाद हुने नेपाली बाहौं भाषा हो ।</p></div></div></div>",
        "inventory": 2
    },
    {
        "id": "30",
        "title": "पल्पसा क्याफे",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825283/palpasa-cafe-nepali-frontcover-w1575-o.jpg",
        "genre": "Novel",
        "synopsis": "<h2 class=\"subtitle is-5 mb-05 mt-m05\" data-v-ac2df6ee=\"\">पल्पसा क्याफे</h2><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/narayan-wagle/\" data-v-ac2df6ee=\"\">Narayan Wagle</a></span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View all winners\" href=\"https://thuprai.com/books/award/govind-chandra-gautam-dipwati-devi-smriti-akhyan-samman/\" data-v-ac2df6ee=\"\">Govind Chandra Gautam-Dipwati Devi Smriti Akhyan Samman</a></div><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View award details for the year\" href=\"https://thuprai.com/books/award/govind-chandra-gautam-dipwati-devi-smriti-akhyan-samman/2061/\" data-v-ac2df6ee=\"\"><strong data-v-ac2df6ee=\"\">2061 BS Winner</strong></a></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View all winners\" href=\"https://thuprai.com/books/award/madan-puraskar/\" data-v-ac2df6ee=\"\">Madan Puraskar</a></div><div data-v-ac2df6ee=\"\"><a class=\"r\" title=\"View award details for the year\" href=\"https://thuprai.com/books/award/madan-puraskar/2061/\" data-v-ac2df6ee=\"\"><strong data-v-ac2df6ee=\"\">2061 BS Winner</strong></a></div></div></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Palpasa Caf&eacute; tells the story of an artist, Drishya, during the height of the Nepalese Civil War. The novel is partly a love story of Drishya and the first generation American Nepali, Palpasa, who has returned to the land of her parents after 9/11. It is often called an anti-war novel, and describes the effects of the civil war on the Nepali countryside that Drishya travels to.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>नारायण वाग्ले २०४७ सालपछिको फराकिलो परिवेशमा पत्रकार बने । समाचारका लागि देशका धेरै भेग घुमे, समाजका सङ्कटहरू नियाले | कान्तिपुर दैनिकमा स्थापनाकालदेखि संलग्न उनले पुनः सक्रिय राजतन्त्रदेखि गणतन्त्र स्थापनासम्मको घटनापूर्ण अवधिमा सम्पादकीय नेतृत्व गरे ।</p><p>यो उनको पहिलो उपन्यास हो । माओवादी द्धन्द्ध उत्कर्षताक प्रकाशित यसले २०६१ सालको मदन पुरस्कार पाएको थियो । चर्चा र बिक्रीका हिसाबले यसलाई नेपाली साहित्य प्रकाशन इतिहासमा एउटा मोड मानिएको छ । हालसम्म यो चारवटा विदेशी भाषामा प्रकाशित भइसकेको छ । यसको अङ्ग्रेजी संस्करण सन् २००८ मा काठमाडौंबाट छापिएको थियो, जसलाई पछि यान्डम हाउस इन्डियाले नयाँ दिल्लीबाट छाप्यो, कोरियाली भाषामा सोलबाट फरेस्ट अफ लिटरेचरले साथै सिंधली भाषामा श्रीलंकाबाट पनि प्रकाशित छ । यसको प्रान्सेली अनुवाद सन् २०१४ मा पब्लिकेसन नेपा-लयले छापेको छ ।</p><p><em>पल्पसा क्याफेले नेपाली साहित्यमा एउटा तरङ्ग ल्याएको छ । पात्रहरूमध्ये एउटी बालिकाको सानो कथा मात्रले पनि यो उपन्यास अमर बनेको छ ।</em></p><p><em>- इन्द्रबहादुर राई</em></p></div></div></div>",
        "inventory": 3
    },
    {
        "id": "29",
        "title": "Palpasa Café (English)",
        "author": "Random House India",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825271/pp-cafe-english-front-w700-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Palpasa Caf&eacute; (English)</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/narayan-wagle/\" data-v-ac2df6ee=\"\">Narayan Wagle</a></span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">From the backcover</h2><div data-v-ac2df6ee=\"\"><p>\"Narayan Wagle is one of Nepal's foremost editors. During his journalistic career spanning two decades, he has travelled to many regions on reporting assignments, much of it on foot. He has had a ringside seat of the dramatic political transformation of the country as it turned from a monarchy to a republic, and went from war to peace.</p><p>His first novel, Palpasa Caf&eacute;, originally published in Nepali in 2005, won that year's most prestigious literary award, Madan Puraskar, and went on to become a runaway bestseller with more than 50,000 copies sold. The English edition of the novel was first published in Nepal in 2008 and later by Random House India. It has also been published in Korean, French and Sinhalese languages. Wagle's second novel, Mayur Times published in 2010 was also well received.\"</p><p>'...a powerful anti-war novel that will be read and talked about for years. It drags us beyond Shangri-La and forces us to look at the abyss below.' - Nepali Times</p><p>'A clever and original novel set amid the death and fear of the Maoist guerrilla war in Nepal.' - Independent</p><p>&nbsp;</p><p>The novel revolves around the two central characters,&nbsp;Drishya&nbsp;and&nbsp;Palpasa, mostly moving along with its male protagonist. It is the story of an artist&nbsp;Drishya&nbsp;during the height of the civil war in Nepal. It is a part love story as well. It dwells, not only, into the effects of the civil war on the Nepali countryside that the male protagonist travels to, but also takes about the blooming love between&nbsp;Drishya&nbsp;and the first generation American Nepali,&nbsp;Palpasa.</p></div></div>",
        "inventory": 1
    },
    {
        "id": "28",
        "title": " सत्यमोहन (Satyamohan)",
        "author": "Girish Giri",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825260/satyamohana-w326-o.jpg",
        "genre": "Biography",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Satyamohan</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Girish Giri</span></div><div data-v-ac2df6ee=\"\"><span style=\"color: inherit; font-family: 'Open Sans', Helvetica, Arial, sans-serif; font-size: 24px; letter-spacing: initial; background-color: rgba(0, 0, 0, 0);\">पुस्तकको बारेमा</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><p>संस्कृतिविद् सत्यमोहन जोशीको आत्मकथामा राणाकालको अन्तिम दशकदेखि कोरोनाकालसम्म जोशीले भोगेका, देखेका र अनुभूत गरेका भौगोलिक, सामाजिक, राजनीतिक, सांस्कृतिक र व्यवहारिक जीवनबारे रोचक शैलीमा वर्णन गरिएको छ ।<br />तीनपटक मदनपुरस्कार प्राप्त गरेका जोशी जीवित अवस्थामा हुलाक टिकट प्रकाशन हुने पहिलो आमनागरिक पनि हुन् ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>एक सय दुई वर्षको उमेरमा पनि अविश्राम खटिरहेका सत्यमोहन जोशीले बाँचुन्जेल नेपाली पहिचानका विभिन्न क्षेत्रहरूप्रति जिज्ञासा राख्दै आएका छन्। उनले आजीवन त्यसैको खोजी एवम् अन्वेषणमा आफूलाई समर्पित गरे । प्रारम्भिक दिनमै उनी राणाकालीन सरकारी जागिरे भई। सर्भे गर्न गाउँघर पसेका थिए । सर्भेका तथ्याङ्कसँगै भोगाइहरू पनि समेटिए । त्यसले उनलाई वाङ्मय र संस्कृतिको क्षेत्रतर्फ मोडिदियो । आफ्ना अनुभवहरू उभ्याउँदै सिङ्गो मुलुककै लामो कालखण्ड बयान गर्न सक्ने उनी अब त्यो पुस्ताकै एक्लो कथावाचक हुन् । यो पुस्तक जोशीको जीवनका एकपछि अर्को चाखलाग्दो भोगाइको माध्यमबाट नेपाली समाजको लामो आरोह। अवरोहलाई चियाउने आँखीझ्याल पनि हो ।</p></div></div></div>",
        "inventory": 5
    },
    {
        "id": "27",
        "title": " बाआमा (Ba-aama)",
        "author": "Ramlal Joshi",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825254/ba-aama-f-w1167-o.jpg",
        "genre": "Stories",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Ba-aama</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Ramlal Joshi</span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>जब कुनै श्रष्टाले आफ्नो कथा भन्न छोडेर सृष्टिको कथा भन्न थाल्छ, तब आकाश आफ्नो उही निलाम्य बैंस पाएर पग्लिन थाल्छ, आफ्नो उही ऋतम्भराको रूप पाएर धर्ती रसाउन थाल्छिन्, अस्ताचलमा डुब्न थालेको सूर्यले उषाकालको अरूणिमा वरण गर्दछ, अन्धकारमा बिलाउन थालेको जूनले पूर्णचन्द्रको आभा प्राप्त गर्छ । ठीक यही बेला सष्टिको ऋतले एकपटक फेरि आफ्ना सन्तानलाई ध्रुवताराको रूपमा स्वीकार गर्छ ।</p><p>बाआमा, सन्तान र सम्बन्ध भन्नु सृष्टिको एउटा ऋत हो । हो, यही ऋतको कथा हो- बाआमा ।</p></div></div>",
        "inventory": 5
    },
    {
        "id": "26",
        "title": " फुर्के (Furke)",
        "author": "Khagendra Lamichhane",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825211/furke-by-khagendra-lamichhane-f-w1221-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Furke</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Khagendra Lamichhane</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>जीवनलाई मानिसले मात्र अनुभूत गर्दैन। हरेक जीवले आ-आफ्नो ढंगले जीवनलाई आ-आफ्नै तरिकाले अनुभूत गर्छन्। उपन्यासको प्रमुख पात्र फुर्के नामक कुकुरको जीवनका आरोह-अवरोहमा उपन्यास केन्द्रित छ। लेखकले मानिसको सबैभन्दा नजिकको साथी र संवेदनशील प्राणी कुकुरको मान्छेसँगको सम्बन्ध, मानव समाजलाई हेर्ने उसको दृष्टिकोण र उसको जीवन भोगाइका कथाहरूलाई उसकै भाषामा उपन्यास 'फुर्के'मा प्रस्तुत गर्न खोज्नुभएको छ।&nbsp;<br />बालबालिकादेखि जुनसुकै उमेरका मानिसले पढ्न मिल्छ।&nbsp;</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Life is not experienced only by humans. Every living being experiences life in its own way. The novel focuses on the ups and downs of the life of Furke, the main character of the novel. The author has tried to present the stories of a human's closest friend and sensitive animal dog's relationship with man, view of human society, and life experiences in his own language in the novel 'Furke'.<br />People of any age can read from children.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>यो संसार सबै प्राणीहरूको साझा घर हो । ती हजारौं प्राणीहरूमध्ये मान्छे पनि एक हो । अलिकति उच्च चेतना र पछिसम्मको कुरा सोच्न सक्ने क्षमताका कारण सदियौंदेखि मान्छेले अन्य प्राणीहरूमाथि शासन गर्दै आइरहेको छ । ती शासित प्राणीमध्येको एउटा हो- कुकुर ।</p><p>मानिसका लागि कुकुर कहिले सुरक्षाकर्मी, कहिले सहयोगी, त कहिले साथी बन्दै आइरहेको छ । अन्य प्राणीभन्दा अलि बढी संवेदनशील कुकुरको मान्छेसँगको सम्बन्ध, मानव समाजलाई हेर्ने उसको दृष्टिकोण र उसको जीवन भोगाइका संवेदनाहरूलाई उसैको भाषामा प्रस्तुत गरिएको किताब हो- फुर्के । बालबालिकादेखि प्रौढ उमेरसम्मका सबैले पढ्न मिल्ने यो किताब सरल भाषाशैलीमा लेखिएको <strong>एउटा कुकुरको आत्मकथा हो</strong> ।</p></div></div></div>",
        "inventory": 4
    },
    {
        "id": "25",
        "title": "ऋतु (Reetu)",
        "author": "चन्द्रा जोशी सुमन",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825182/reetu-w112-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Reetu</h1><p>by चन्द्रा जोशी सुमन</p><p>&nbsp;</p><p>प्रवासी नेपाली महिलाहरुको प्रतिनिधि कथा&nbsp;</p>",
        "inventory": 3
    },
    {
        "id": "24",
        "title": "रुखहरूको मृत्यु (Rukhharuko Mrityu)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825146/rukhhruko-mrityu-w720.jpeg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Rukhharuko Mrityu</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by</span>&nbsp;<span data-v-ac2df6ee=\"\"><a class=\"\" title=\"View author profile\" href=\"https://thuprai.com/author/prasant-sharma/\" data-v-ac2df6ee=\"\">Prasant Sharma</a></span></div>",
        "inventory": 2
    },
    {
        "id": "23",
        "title": "फेब्रुअरी १४ (February 14)",
        "author": "Nimesh Poudel",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825139/feb14-cover-w1416-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">February 14</h1><p>by Nimesh Poudel</p><p>&nbsp;</p><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>This is the second fictional book by Nimesh Poudel, the author of Five Months.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>प्रेम । संसारमा सबभन्दा बढी लेखिएको, बोलिएको, देखाइएको, महसुस गरिएको विषय । बुझेर बुझिसाध्य नभएको विषय ।। 'प्रेमले नै देखाउँछ संसारमा, अनेक कलामध्येको चर्तिकला । यो उपन्यास प्रेमान्यास हो । यो यस्तो उपन्यास हो,&nbsp;जसले एकैचोटि दुइटा काम गर्छ - मन सफा पनि गर्छ र दिमाग खराब&nbsp;पनि गर्छ । समयअनुसारको प्रेम&nbsp;।&nbsp;समाजअनुसारको प्रेम । भनौं न, फ्रेमअनुसारको प्रेम । प्रेम निष्ठावान भएर&nbsp;विप्लवी पनि छ र विप्लवी भएर पनि&nbsp;निष्ठावान् छ । विप्लवको डिप-लभ ! रोमान्स त कति कति । युवाका लागि, युवाद्वारा, युवाको कथा ।</p></div></div><p>&nbsp;</p>",
        "inventory": 2
    },
    {
        "id": "22",
        "title": " झुमर (Jhumar)",
        "author": "Simran Chhetri",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825117/jhumar-front-w625-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Jhumar</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Simran Chhetri</span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>नारी कथामा आधारित उपन्यास झुमरमार्फत लेखक क्षेत्रीले आधुनिक प्रेम कथालाई बाहिर ल्याउने प्रयास गरेकी छन् ।&nbsp;&nbsp;झुमर नक्कली प्रेमको सक्कली कथा हो । प्रेमका अनेक रूप हुन्छन्, अहिलेको प्रेम झन् थरीथरीका हुन्छन्,&nbsp;लेखिकाले आधुनिक प्रेमको कथालाई उपन्यासमा सुन्दर ढङ्गले प्रस्तुत गरेकी छन् ।</p></div></div>",
        "inventory": 5
    },
    {
        "id": "21",
        "title": " पहेँलपुर (Pahelpur)",
        "author": "GS Poudel",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825043/pahelpur-by-gs-paudel-w480-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Pahelpur</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by GS Poudel</span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>गिब्बन र बार्बरीहरुको संसारमा जस्तै मिथक फूल छ हरेक संसारभित्र तर समुदायले कहिल्यै त्यसको खोज गर्दैन । क्यालालिलीको। सौन्दर्यसँगै सती जानेहरु आफूलाई जीवनको ठूलो खाडलभित्र त पुऱ्याउँछन् तर बाहिर निकाल्ने यत्न कतैबाट गर्दैनन् । पहेंलपुर डरलाग्दो साम्राज्य हो तर यसलाई ध्वस्त पार्न कोही अघि सर्दैन । ।</p><p>वास्तवमा हामी पहेंलो रंगमार्फत राजषी ठाँट वा अहंबाट मुक्त रहनुपर्ने हो। तर मानिसहरूको समाज विचित्रको छ। व्यक्ति लोभ, मोह, अहंलाई नै। पच्छ्याइरहन्छ र ऊ कहिल्यै मुक्त हुन रुचाउँदैन यो जञ्जालहरूबाट ।।</p><p>पहेंलिनमा व्यथा छ । परापूर्वकालदेख बोकेर आएको रोगबाट मुक्ति।</p><p>खोज्नमा संसारको उत्थान छ, न कि यसभित्र भासिएर आफूपतन हनुमा ।। 'उपचार आफैसँग हुन सक्छ तर खोजी कसले गर्ने ?</p><p>अम अर्थात मायाको एक सर्को धुवाँमा रुमल्लिएर माल्दिम्सबाट डिपोर्ट। भएको आलोक हयालसिनेसनबाट तङ्गरिन लाग्दैथियो कि ऊ। पहेंलपुरमा रुमल्लियो।</p><p>'पहँलो छ दृष्टि, पहेंलो फूल, पहेंलपुर छ संसार ।।</p></div></div><div data-v-ac2df6ee=\"\">&nbsp;</div>",
        "inventory": 4
    },
    {
        "id": "20",
        "title": "अतीतको त्यो मधुर कहानी ",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825036/atit-ko-madhur-kahani-w679-o.jpg",
        "genre": "गजलसङ्ग्रह",
        "synopsis": "<h1 class=\"title\">गजल संग्रह</h1><p>शेखर अस्तित्वका १०१ गजलहरुको संगालो शेखर अस्तित्व</p>",
        "inventory": 2
    },
    {
        "id": "19",
        "title": " कारा (Kara)",
        "author": "Sushila Karki",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825027/kara-by-sushila-karki-front-w900-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Kara</h1><h2 class=\"subtitle is-5 mb-05 mt-m05\" data-v-ac2df6ee=\"\">कारा</h2><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Sushila Karki</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Kara is the first novel of Nepal's first-ever female Chief Justice of the Supreme Court, Sushila Karki. In this book, she explains the pain, oppression, and difficulties that Nepali women have to go through as well as the circumstances that lead them to crime. The setting of the novel is Biratnagar Jail, where Karki herself had to spend some time as a prisoner for being a part of the democratic movement.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>कारा एउटा बन्धनको कथा हो । महिला कैदीहरूले भोगेको भौतिक कारागारको मात्रै बन्धन होइन, समाजले उनीहरूलाई लगाएका अनेक बन्धनको कथा यसमा छ ।</p><p>निरङ्कुश पञ्चायती व्यवस्थाविरुद्ध प्रजातन्त्र प्राप्तिका लागि २०४६ मा जनआन्दोलन सुरू भएको समयको सेरोफेरोको कथा भन्ने यो उपन्यास जेलभित्रको बेग्लै निरङ्कुशताको कथा पनि हो । समाजले परित्याग गरेका, देशका लागि हानिकारक भनेर जेलमा सडाइएका उपेक्षित महिलाहरूको दुःख र वेदनाको कथा हो । बेकसुरलाई कसुरदार बनाउने र कसुरदारलाई अझै असुर बनाउने व्यवस्थामा केही निरीह महिलाहरूले भोगेको लामो ताडना र यातनाको गाथा हो- कारा ।&nbsp;</p></div></div></div>",
        "inventory": 2
    },
    {
        "id": "18",
        "title": "ओ दार्जीलिङ!: सीमा वारिपारिक परिवेश र मन्थन (Oh Darjeeling!)",
        "author": "Mahendra P",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825022/oh-darjeling-by-mahendra-p-lama-w329.jpeg",
        "genre": "Stories",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Oh Darjeeling!</h1><h2 class=\"subtitle is-5 mb-05 mt-m05\" data-v-ac2df6ee=\"\">ओ दार्जीलिङ!<span data-v-ac2df6ee=\"\">: सीमा वारिपारिक परिवेश र मन्थन</span></h2><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Mahendra P. Lama</span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>ओ दार्जीलिङ ! दार्जीलिङ क्षेत्र, भारतीय गोर्खा र गोर्खाल्याण्डका मुद्दाहरूमा बढी केन्द्रित छ, तर यो पुस्तक त्यतिमा मात्रै सिमित छैन । यसले 'पहाडकी रानी को समृद्ध इतिहास, गर्विलो विरासत र अन्यौलग्रस्त वर्तमानलाई जीवन्त ढंगबाट चित्रण गरेको छ । दार्जीलिङले आफ्नो स्वाभिमानका निम्ति सय बर्षदेखि गर्दैआएको संघर्षको झलक पनि यसमा पढ्न पाइन्छ । सिक्किमसँग जोडिएका प्रसंगहरू पनि पुस्तकमा आउँछन् ।&nbsp;</p><p>सँगै, भारतबाट नेपाललाई नियाल्दा कस्तो देखिन्छ; तिब्बत र चीनतिर चियाउँदा के-के पाइन्छ; कुटनीति, भूराजनीति र अन्तर्राष्ट्रिय सम्बन्धका नयाँ मुद्दाहरू के हुन्- यी र यस्ता बिषयलाई पनि पुस्तकले समेटेको छ । लेखकको अनुभूति खण्डमा 'बज्यै, मेलको चुक र विज्ञान'देखि 'चालीस, दिल्ली र जिन्दगी', 'कोरोना, कपाल र हजाम', 'भोट, नोट र चोट' जस्ता विविधतायुक्त सामग्रीहरू छन् । ओ दार्जीलिङ ! यस्ता ४९ वटा फरकफरक आलेखहरूको संग्रह हो, जसले सीमावारि र हिमालपारिका अनेकन् बिषयहरूलाई समेटेको छ ।</p></div></div>",
        "inventory": 2
    },
    {
        "id": "17",
        "title": "परदेशको पसिना: वैदेशीक रोजगारीका अर्थ- सामाजिक आयाम (Pardesh ko Pasina)",
        "author": "Yangesh",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825015/pardesh-ko-pasina-front-w209-o.jpg",
        "genre": "Stories",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Pardesh ko Pasina</h1><h2 class=\"subtitle is-5 mb-05 mt-m05\" data-v-ac2df6ee=\"\">परदेशको पसिना<span data-v-ac2df6ee=\"\">: वैदेशीक रोजगारीका अर्थ- सामाजिक आयाम</span></h2><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">Edited by Yangesh</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>&nbsp;पुस्तकमा वैदेशिक रोजगारीको इतिहास, रेमिट्यान्सबाट प्राप्त धनको वर्तमानमा समाजमा महत्व, रेमिट्यान्सको प्रयोगबारे स्थापित मान्यता र अवधारणामाथि प्रश्न, वैदेशिक रोजगारीमा जानेहरुको अवस्था, वैदेशिक रोजगारीमा महिला, दलित समुदायको आर्थिक उत्थानमा यसको भूमिका, वैदेशिक रोजगारीबारे सरकारी नीतिजस्ता विषयमा चर्चा गरिएको छ ।</p><p>विभिन्न अध्ययन, अनुसन्धान र उपलब्ध तथ्यांकहरुका साथमा सम्बन्धित विषयका विज्ञ र ज्ञाताहरुसँग कुराकानीसमेत गरेर तयारी पारिएका यस पुस्तकमा मैना धिताल, राजाराम गौतम, तुलानारायण साह, रमेश कुमार, सजना बराल, रामचन्द्र श्रेष्ठ र जनकराज सापकोटाका सातजना लेखहरु छन् ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>वैदेशिक रोजगारी यो समय र यो पुस्ताका लागि त्यस्तो परिघटना हो, जसले नेपाली समाजको कायापलटमा चुपचापै महत्त्वपूर्ण योगदान दिइरहेको छ । रेमिट्यान्सले यो देशका अर्थमन्त्रीले वाचन गर्ने बजेटका बुंदा मात्रै होइन, नागरिकले हातमा बोक्ने स्मार्ट फोनको आकार र भान्सामा पाक्ने पकवानका प्रकारसम्म निर्धारण गरिरहेको छ । यो पुस्तकले वैदेशिक रोजगारी र रेमिट्यान्सका केही आयामहरूको चित्रण गर्ने र त्यसमाथि छलफल निम्त्याउने प्रयास गरेको छ । यसमा व्यक्तिका भन्दा बढी सामूहिक अनुभूतिका कुरा छन्, कथा छन् ।परदेशमा पसिना बगाएर पठाएको धनको मात्रै हिसाबकिताब गरिने शास्त्रमा अंकहरूका बीचबाट ती मानिसलाई चियाउने प्रयास गरिएको छ, जसका आँसु र सुस्केराले भावी पुस्ताका लागि आशाको फूल फुलाइरहेका छन् ।</p></div></div></div>",
        "inventory": 2
    },
    {
        "id": "16",
        "title": "दरबारको दुःखान्त: राजपरिवार र संहार, मैले जसरी देखेँ  (Durbarko Dukhanta) ",
        "author": "Sundarpratap Rana",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30825009/durbarko-dukhanta-w556-o.jpg",
        "genre": "Memoir-History",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Durbarko Dukhanta</h1><p>by Sundarpratap Rana</p><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>राजदरबार हत्याकाण्ड एक्काइसौं शताब्दीको सुरुमै भएको सर्वाधिक सनसनीपूर्ण&nbsp;घटना&nbsp;थियो । त्यसको कारण र पृष्ठभूमि के थियो ? २०५८ जेठ १९ गते त्रिभुवन सदनभित्र खासमा के भएको थियो ?&nbsp;</p><p>त्यहाँ गोली चल्दाचल्दै छिर्ने पहिलो व्यक्ति हुन्&ndash; तत्कालिन प्रमुख शाही पाश्र्ववर्ती (एडिसी) सुन्दरप्रताप राना ।&nbsp;</p><p>&lsquo;दरबारको दुखान्त&rsquo; पुस्तकमा उनले आफूले आँखैअगाडि देखेको त्यो दृश्यको विस्तृत वर्णन गरेका छन् । राजाको एडिसीका रुपमा दरबारमा १७ बर्ष बिताउँदा देखेका अन्य थुप्रै अनुद्घाटित घटनाका&nbsp;साक्षी पनि हुन् राना । राजसदस्यहरुको स्वभाव&ndash;शैलीलगायत थुप्रै निजी प्रसंगहरू&nbsp;यहाँ पढ्न पाइन्छ । देशको राजनीति र छिमेकी मुलुकसँगको उतारचढावबारे पनि धेरै कुरा बुझ्न सकिन्छ ।</p><p>राजपरिवारको जीवन र अन्त्यको वृत्तान्त हो&ndash; &lsquo;दरबारको दुःखान्त&rsquo;, जसले नेपालको निकट इतिहास बुझ्न सघाउँछ ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Nepal's royal massacre was a sensational incident at the beginning of the 21st century. What was the background of that tragedy? What happened at Narayanhity royal palace on 1 June 2001?Then King Birendra's aide-de-camp Col. Sundar Pratap Rana was the first person to enter the premises after the first round of fire. In this book, he tries to describe what he saw there and also shares his adventurous experiences with the Nepali royals.</p></div></div>",
        "inventory": 2
    },
    {
        "id": "15",
        "title": "सनैया: मरूभूमिमा जीवन खोज्नेहरुलाई पछ्याउँदै (Sanaiya)",
        "author": "Hom Karki",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30824989/sanaiya-front-w1535-o.jpg",
        "genre": "Stories",
        "synopsis": "<p>Sanaiya</p><p>by Hom Karki</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>उराठ चल्ने उजाड मरूभूमिमा सुन्दर जीवनको खोजी गर्ने केही मानिसहरू छन्, जो आफ्नो परिवार र सन्तानको भविष्यका लागि पसिनाका धारा बगाइरहेका छन । अरबले संसारलाई देखाइरहेको वैभवमा यी मानिसहरूको श्रम गारोमा इँटाजसरी बसेको छ, जो बाहिरबाट हेर्दा देखिंदैन तर संरचनाको भार उसैले बोकेको हुन्छ । कतै अग्ला भवनमा झुन्डिएर रङ लगाइरहेका त कतै सिसाका झ्याल मिलाइरहेका यिनको श्रम रियाल, दिनार र दिराममा साटिएर नेपाल आइपुग्छ ।&nbsp;</p><p>सुन्दर भविष्यको खोजीमा जवान वर्तमान साटिरहेका तिनै मानिसहरूको कथा हो, सनैया । आफ्नो देश र समाजले उपयोग गर्न नसकेको, उपेक्षा गरेका सस्ता श्रमिकको जीवन गाथा हो, सनैया । एउटा सिंगो पुस्ताले भोगेको अपमान र अत्यासको विरह, जसमा नेपालको अर्थतन्त्र टिकेको छ, देश बनाउन परदेश हिंड्ने श्रमजीवीको कथा हो सनैया । जसले अरबका चोक चोकमा नयाँ नेपाल बनाएका छन्, तिनका टुटेका सपना र छुटेको जीवनको कथा पनि हो, सनैया ।</p></div>",
        "inventory": 3
    },
    {
        "id": "14",
        "title": "मोक्षभूमि (Mokshabhumi)",
        "author": "Keshab Dahal",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30824980/mokshabhumi-front-w559-o.jpg",
        "genre": "Novel",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Mokshabhumi</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Keshab Dahal</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\">&nbsp;</div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>यो आजभन्दा सयौँ वर्षअगाडिको कथा हो । जतिखेर धरतीको रङ र सुगन्ध अर्कै थियो । ठाउँठाउँमा शिशुबलि हुन्थ्यो । नरबलि हुन्थ्यो । तन्त्रमन्त्रहरूको साधना हुन्थ्यो । सामन्त, सम्राट्, राजा, महाराजाहरू थिए&nbsp;। दासहरू थिए, दासशालाहरू थिए&nbsp;। आर्यवर्तमा आधुनिक मानव सभ्यताले भर्खरै पालुवा हाल्दै थियो । त्यो परिपक्व र मधुर थिएन । बाहिरबाट हेर्दा सबै शान्त देखिन्थ्यो । तर भित्र थियो, उथलपुथल । कष्टको पिँजडाबाहिर आउन मान्छेहरूमा तिव्र छटपटी थियो । तिनै कष्टहरूको जन्जिरबाट फुत्किएका दासहरूको कथा हो - मोक्षभूमि ।</p></div></div>",
        "inventory": 4
    },
    {
        "id": "13",
        "title": "परराष्ट्रका पात्र: नेपाली कूटनीतिको सञ्चालन र सञ्चालक Pararashtra ka Patra",
        "author": "Dr",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/30824946/pararastra-ka-patra-front-w800-o.jpg",
        "genre": "Political",
        "synopsis": "<p><span data-v-ac2df6ee=\"\">Pararashtra ka Patra</span></p><p><span data-v-ac2df6ee=\"\">by Dr. Madan Kumar Bhattarai</span>&nbsp;</p><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>Who operated Nepal's foreign affairs in different period and how? How was Nepal's foreign policy decided at different times? What was the working style of various politicians, ministers, and diplomats? This book written by former Foreign Secretary Dr. Madan Kumar Bhattarai carries factual information and analysis about the foreign ministry and Nepal's diplomatic history.</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>नेपालको कुटनीतिक सेवामा झण्डै चार दशक बिताएका डा. मदनकुमार भट्टराईको पुस्तक &lsquo;परराष्ट्रका पात्र&rsquo; मा विदेश अड्डाका प्रमुख सञ्चालक तथा विदेशनीतिका स्रष्टाहरुका बारेमा विस्तारमा चर्चा गरिएको छ ।&nbsp;पूर्वपरराष्ट्र सचिव, पूर्वराजदूत एवम् दुई बर्ष राष्ट्रपतिका कुटनीतिक मामिला सल्लाहकारसमेत रहेका भट्टराईको यो किताब पढ्दा नेपालको परराष्ट्र मामिला हालसम्म कस&ndash;कसले, कसरी चलाए भन्नेबारे तथ्यपरक जानकारी मिल्छ ।&nbsp;विभिन्न कालखण्डमा नेपालको परराष्ट्र नीति के&ndash;कसरी तय भयो ? कुन नेता वा मन्त्रीको काम गर्ने शैली कस्तो थियो ? त्यसले समग्र परराष्ट्र सम्वन्ध सञ्चालनमा कस्तो असर पार्र्यो भन्नेबारे यो किताबले राम्रोसँग प्रष्ट्याउँछ ।&nbsp;</p><p>छोटकरीमा भन्दा, नेपाली कुटनीतिका प्रमुख सञ्चालक र उनीहरुले सञ्चालन गरेको कुटनीतिबारे सरल शैलीमा बुझाउने पुस्तक हो&ndash; &lsquo;परराष्ट्रका पात्र&rsquo; ।&nbsp;</p></div></div><p>&nbsp;</p>",
        "inventory": 2
    },
    {
        "id": "12",
        "title": " विमान विद्रोह: एउटा राजनीतिक अपहरणको बयान",
        "author": "Durga Subedi",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30824941/biman-bidroha-front-w700-o.jpg",
        "genre": "Political",
        "synopsis": "<h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">Biman Bidroha</h2><p>by Durga Subedi</p><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book&nbsp;</h2><div data-v-ac2df6ee=\"\"><p>During the seventies, Nepal witnessed its first aircraft hijack that was aimed against the then royal regime. Biman Bidroha is a book written by the leader of that mission as well as a senior leader of the democratic movement Durga Subedi. The writer has given a thrilling detail of the hijacking and many other important political turmoil. This memoir not only tells the history of Nepali Congress, BP Koirala, and the movement against the authoritarian Panchayat system but also explains the beginning of the peace process with the Maoists.</p></div>",
        "inventory": 3
    },
    {
        "id": "11",
        "title": "माधवी ओ माधवी",
        "author": "Keshab Dahal",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30824939/madhavi-by-keshav-dahal-front-w1549-o.jpg",
        "genre": "Literature/Essays",
        "synopsis": "<div class=\"book-intro\" data-v-ac2df6ee=\"\"><h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Madhavi O Madhavi</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Keshab Dahal</span></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>केही सुदूर अतीतको परिकल्पना । केही स्मृतिपटका तस्बिर | केही आफू हिँडेको पथवृत्तान्त । केही विगतका बिब्ल्याँटा वर्णन । केही वर्तमानका सङ्कट र द्विविधा । केही सुन्दर भविष्यका सपना | र, सबैको अन्तर्यमा नेपाली जनमानसको सपना र प्रयत्नका उकालीओराली अनि कुइनेटाहरू पस्किने निर्बन्ध लेखन हो, माधवी ओ माधवी ।</p></div></div></div><div class=\"columns buy-blocks is-mobile\" data-v-ac2df6ee=\"\"><div class=\"column box\" data-v-ac2df6ee=\"\">&nbsp;</div></div>",
        "inventory": 6
    },
    {
        "id": "10",
        "title": "सती: इतिहास र मीमांसा",
        "author": "Sujit Mainali",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30819406/sati-by-sujit-mainali-front-w904.jpeg",
        "genre": "General",
        "synopsis": "<div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">Sati</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Sujit Mainali</span></div><div data-v-ac2df6ee=\"\">&nbsp;</div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>पुरुषप्रधान समाजमा पत्नीको प्रयोजन भनेकै पतिको कुलका लागि छोरा जन्माइदिनु हो । पत्नीबाट जन्मिएको छोरो आफ्नै रहेको सुनिश्चित गर्न स्त्रीको यौनजीवनलाई कठोर अनुशासन'मा राख्न पतिहरूले आवश्यक ठाने । यसका लागि पातिव्रत्यको महिमा गाएर पत्नीलाई सिर्फ पतिप्रति बफादार बन्न प्रेरित गरियो । पतिव्रता धर्मको कठोरतम रूप हो, सतीप्रथा । यसले पत्नीलाई जन्मजन्मान्तरसम्म पतिकी अनुगामिनी बन्न उक्साउने र बाध्य पार्ने दुवै काम गर्छ । पतिको मृत्युपछि पनि पत्नीलाई 'परपुरुषगामिनी' बन्न नदिन उसको हत्या गरिदिन्छ ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>The book 'Sati: Itihas ra Mimansa' is about the Sati system in Nepal. It deals with the historical, social, and psychological aspects of the system. Discussing how a male-dominated society took advantage of the ancient custom of burning a deceased man's wife on his funeral pyre, the book also discusses other forms of violence against women, such as the practice of untouchability during menstruation.</p><p>It also talks about how the sati system was used to control women's sex lives and how it was used as a weapon to gain power by royal families.</p></div></div></div>",
        "inventory": 6
    },
    {
        "id": "9",
        "title": "खान पुगोस् दिन पुगोस् (Khana Pugos, Dina Pugos)",
        "author": "Rabindra Mishra",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30819372/khanapugos-front-w893-o.jpg",
        "genre": "Literature/Essays",
        "synopsis": "<h1 id=\"title\" class=\"a-spacing-none a-text-normal\"><span id=\"productTitle\" class=\"a-size-extra-large\">Khana Pugos, Dina Pugos (Nepali Edition)</span></h1><p><span class=\"a-size-extra-large\"><span data-v-ac2df6ee=\"\">by Rabindra Mishra</span></span></p><p>&nbsp;</p><p><strong><span class=\"a-size-extra-large\">About the book</span></strong></p><p>&nbsp;</p><p><span class=\"a-size-extra-large\"><span data-v-ac2df6ee=\"\">Khana Pugos, Dina Pugos is a collection of essays by Rabindra Mishra. The essays primarily focus on the dual themes of 'Practical Philanthropy' and 'Philanthropic Journalism', both of which the writer promotes and practices. The book offers a new approach to the practice of philanthropy and journalism. Like his previous publication, the writer is donating the royalty of this book to support the Chepangs, one of the most deprived communities in Nepal.</span></span></p>",
        "inventory": 2
    },
    {
        "id": "8",
        "title": "हिति प्रणाली",
        "author": "Padma Sundar Joshi",
        "price": 28,
        "image": "https://files.secure.website/wscfus/10720412/30819366/hiti-frontcover-w1920-o.jpg",
        "genre": "General",
        "synopsis": "<h1 class=\"title is-4 mb-1\" data-v-ac2df6ee=\"\">Hiti Pranali</h1><div data-v-ac2df6ee=\"\"><span data-v-ac2df6ee=\"\">by Padma Sundar Joshi</span></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\">&nbsp;</div></div><div data-v-ac2df6ee=\"\"><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>हिति प्रणाली काठमाडौं उपत्यकाको मौलिक पानी व्यवस्थापन प्रणाली, यसको वास्तुशिल्प, उपादेयता र चुनौतीहरुमाथि मन्थन गरिएको विश्लेषणात्मक पुस्तक हो । हितिको जगेर्नामा लामो&nbsp; समय देखि संलग्न पद्मसुन्दर जोशीको यो नेपालीमा प्रकाशित पहिलो पुस्तक हो ।&nbsp;</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">About the Book</h2><div data-v-ac2df6ee=\"\"><p>'Hiti Pranali' is an extensive research work on the ancient Hiti system. The book talks about how the Hitis played an important role in Nepali life and how the introduction of pipes and taps for drinking water covered the Hitis. He discusses at length how the centralization of city services has created problems in maintaining them.</p><p>The writer also recommends ways to rehabilitate Hiti to revitalize the system as a whole. Joshi's proposal to revive Hiti puts on top of mapping the system along with declaring it a national heritage, with a proper law, without politicizing it. It includes separate drainage systems in the valley with stormwater and outfall sewers.</p></div></div></div>",
        "inventory": 3
    },
    {
        "id": "6",
        "title": "अग्नि",
        "author": "Dr",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30722102/img-6836-w877-o.jpg",
        "genre": "महाकाव्य,Poems",
        "synopsis": "<h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">मदन पुरस्कार २०७८ प्राप्त</h2><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">Agni</h2><p>By Dr. Naba Raj Lamsal</p><p>&nbsp;</p><p>&nbsp;</p>",
        "inventory": 2
    },
    {
        "id": "5",
        "title": "नाथिया",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30714427/nathiya-thumbnail-w474-o.png",
        "genre": "Novel",
        "synopsis": "<h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>सदियौँदेखि नेपालको सुदूर&ndash;पश्चिमका विभिन्न स्थानमा रहेको नारी कुप्रथा, त्यसभित्रको बेथितिलाई जिवन्तरुपमा चित्रण गरिएको उपन्यास &lsquo;नथिया&rsquo; पछिल्लो समयमा लेखिएको नेपाली साहित्यको मानककृति हो । &lsquo;सामली वादी&rsquo;को जीवनका शब्दमा व्यक्त गर्न नसकिने भोगाइलाई उपन्यासमा चित्रण गरिएको छ । सरस्वती प्रतीक्षाको यो पहिलो उपन्यास हो ।</p></div>",
        "inventory": 2
    },
    {
        "id": "4",
        "title": "प्रिय सुफी",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30709039/img-6820-w1024-o.jpg",
        "genre": "Novel",
        "synopsis": "",
        "inventory": 1
    },
    {
        "id": "3",
        "title": "खुडी",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30714426/khudi-thumbnail-w460-o.jpg",
        "genre": "गजलसङ्ग्रह",
        "synopsis": "<h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">कमल सङ्घर्ष को गजल संग्रह</h2><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><p>कमल सङ्घर्ष नेपाली गजलका स्वनामधन्य श्रष्टा हुन् । गजलमा विस्मयकारी गतिशीलता, मौलिक र सूत्रात्मक कथनशैली सङ्घर्षका निजत्व हुन् । भाषा, कला, साहित्य र संस्कृतिको प्रवर्द्धन एवम् उत्थानमा सक्रिय उनको सडक गजलसङ्ग्रह (२०७३) प्रकाशित छ।</p>",
        "inventory": 14
    },
    {
        "id": "2",
        "title": "मफलर (Hard cover)",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30727204/maffler-w460-o.jpg",
        "genre": "गजलसङ्ग्रह",
        "synopsis": "<p>प्रदीप रोदनको गजल संग्रह</p><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पुस्तकको बारेमा</h2><div data-v-ac2df6ee=\"\"><p>मफलर गजलको रदिफ र काफिया मिलाइएको गजलसङ्ग्रह मात्र नभएर, मन्त्रहरूको सङ्ग्रह हो।</p><p>जीवनलाई मथेर निकालिएको नौनी हो मफलर।&nbsp;खारिएका पवित्र वाक्य यस सङ्ग्रहमा छन् । धेरै पुस्तक बोरामा थन्काउनुपर्ने हुन्छ । केही पुस्तक बुककेसमा सजाएर राखिन्छ । केही पुस्तक आफूले पढ्ने टेबलमा राखिन्छ । केही किताब यस्ता पनि हुन्छन्, जो सिरानीमुनि राखिन्छ । यो त्यसैगरी सिरानीमुनि राख्ने कृति हो ।</p></div></div><div data-v-ac2df6ee=\"\"><h2 class=\"title is-4 mt-1 mb-1\" data-v-ac2df6ee=\"\">पछिल्लो बाहिरी पृष्ठबाट</h2><div data-v-ac2df6ee=\"\"><p>हरेकको जिन्दगीमा महाभारत घट्दैन जहाँ घट्छ, त्यहाँ एउटा गीता जन्मिन्छ ।</p></div></div>",
        "inventory": 18
    },
    {
        "id": "1",
        "title": "इजोरिया (Ijoriya)",
        "author": "Subin Bhattarai",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/30714429/ijoriya-thumbnail-w461-o.png",
        "genre": "Novel",
        "synopsis": "<p>-By Subin Bhattarai</p><p>&nbsp;</p><p>Nominations Padmashree Sahitya Puraskar, 2079 BS Madan Puraskar, 2079 BS There is a multifaceted story in the novel 'Ijoriya'. Author Bhattarai has brought out the love, hate and conflict between the family members in the story. Bhattarai, who has written stories focusing on Kathmandu in all his previous books, this time he has reached Madhes to capture the story. 'Ijoriya' is a Maithili word. It means Juneli.</p><p>&nbsp;</p><p>पछिल्लो बाहिरी पृष्ठबाट सुबिन भट्टराईका पाठकलाई थाहै छ&ndash; उनी विषय होस् वा शैली; हर पुस्तकमा नयाँ गर्छन् । कथाकी पात्र, समर लभ, प्रिय सुफी हुँदै इजोरियासम्म आइपुग्दा उनी भाषा, भाव र भूगोलमा थप बलियो बनेका छन् । उनको मनोवैज्ञानिक सम्बन्ध-साहित्य सदाबहार छँदै छ । सुबिन ट्रेन्ड सेटर हुन्, जो कहिल्यै कम्फर्ट जोनमा बस्दैनन् । र यस पुस्तकबाट हर पाठक सुबिनको नयाँ जोन चुमेर चमत्कृत हुनेछन् । इजोरिया मित्रताको कथा हो ।&nbsp; इजोरिया महिलाको कथा हो ।&nbsp; इजोरिया मधेसको कथा हो ।&nbsp; इजोरिया मुक्तिको कथा हो ।&nbsp; इजोरिया माया र ममताको कथा हो ।&nbsp; इजोरिया मुटुको मसीले लेखिएको म्युजिकल महाकथा हो । &nbsp;<br /><br /><br /></p>",
        "inventory": 32
    },
    {
        "id": "89",
        "title": "Mahabir Pun Samjhana, Sapana ra Abiral Yatra (महावीर पुन: सम्झना, सपना र अविरल यात्रा 0",
        "author": "Unknown Author",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33338869/mahabir-pun-b-w746.jpeg",
        "genre": "Biography",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट तर यात्रीहरूलाई मुग्ध पार्ने भौगोलिक दृश्यहरू स्थानीय बासिन्दाका निम्ति गरिबीका कारण बन्न सक्छन् । जब मैले गगनचुम्बी हिमशिखरहरू र ठाडा पाखाहरूमा तलदेखि माथिसम्म नै मुजा परेजस्ता देखिने सुन्दर कान्लाहरूलाई मन्त्रमुग्ध भएर हेरिरहेको थिएँ, त्यतिबेला आसन्न आर्थिक र पर्यावरणीय बिपद् पनि हेरिरहेको छु भनेर मलाई ख्याल नै भएन । हातमुख जोड्नका लागि विकट पाखाहरूमा सङ्घर्षरत कृषकहरूले खेती गर्दा भूक्षय भइरहेको थियो र जङ्गल मासिइरहेका थिए । उनीहरूको पैसा कमाउने कुनै उपाय थिएन, केही व्यक्तिले मात्र आफ्ना छोराछोरीहरूलाई स्कुल पठाउन सक्थे र यस्तो लाग्दथ्यो कि त्यो दुश्चक्र कहिल्यै अन्त हुने छैन । - अमेरिकामा पढेर फर्केका महावीर पुनले त्यो दुश्चक्र तोड्ने एउटै उपाय देखे - गाउँका बालबालिकाहरूलाई शिक्षित पार्नु र सम्भव भएसम्म आयआर्जनका कार्यक्रमहरू गाउँमा नै सुरूवात गर्नु - डायन आर्मस्ट्रङ</p>",
        "inventory": 2
    },
    {
        "id": "90",
        "title": "Bhayeka Kura",
        "nepaliTitle": "भएका कुरा",
        "author": "Kashinath Acharya Dixit",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33338874/bhayeka-kura-f-w1014-o.jpg",
        "genre": "General",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट राणा दरबारका पटाङ्गिनीदेखि चोटा-कोठामा विभिन्न काममा खटाइएका सेवकहरू को हुन्थे ? कस्ता हुन्थे ? कसरी त्यहाँसम्म पुग्थे ? उनीहरूको काम के हुन्थ्यो ? उनीहरूसँग राणा शासकले गर्ने व्यवहार कस्ता हुन्थे ? यस्ता प्रश्नहरूको सजीव जवाफ हो&mdash; भएका कुरा । वीरशमशेरदेखि चन्द्रशमशेरसम्मका राणा प्रधानमन्त्रीहरूको खोपीमा पुजारीका रूपमा सेवक भएका काशीनाथ आचार्य दीक्षितको यो संस्मरणात्मक कृतिले राजनीतिक घटनाका क्रम-उपक्रमबाट पर शासकहरूको व्यक्तिगत शैली र चरित्र चियाउनुका साथै राणा दरबारको इतिवृत्तान्त बताउँछ, जुन राणा शासनबारे लेखिएका थुप्रै पुस्तकहरूमा पाइँदैन । राणा शासकहरूको चासो र चिन्ता, एक-अर्कालाई गर्ने शङ्का र जासुसी, कठोर शासकीय छविपछाडि लुकेको असली अनुहार, तिनको ग्लानी, क्षोभ, त्रास र हैरानीको दृश्य-चित्र पनि यस पुस्तकमा छन् । दरबारका कुनाकाप्चामा चल्ने सेवकहरूको कानेखुसी, तिनीहरूबीचको खिचातानी, चुक्ली र चाकरीजस्ता गतिविधिको भोगाइको दस्तावेज पनि हो यो संस्मरण । साथै, धीरशमशेरको दरबारमा छिरेका मुड्खुका ब्राह्मण शिरोमणि आचार्यका पुत्र काशीनाथको यो संस्मरण दीक्षित परिवारको कथा पनि हो ।</p>",
        "inventory": 2
    },
    {
        "id": "91",
        "title": "Urmaal",
        "nepaliTitle": "उरमाल",
        "author": "Chhuden Kabimo",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33338897/urmal-dt4hozl-w1075-o.jpg",
        "genre": "Stories",
        "synopsis": "<p><strong>Awards Madan Puraskar, 2081 BS Winner </strong></p><p><strong>Nominations Padmashree Sahitya Puraskar, 2081 BS </strong></p><p>पछिल्लो बाहिरी पृष्ठबाट सङ अफ द स्वयल (फातसुङ) उपन्यासका लागि भारतको प्रतिष्ठित जेसिबी प्राइज फर लिटरेचर २०२२ मा सर्टलिस्टेड लेखक उरमाल झर्रा आदिवासी कथा हो । चियाको बोटसँग माया साटेर पुस्तौदेखि धरमराइरहन विवश श्रमिकहरूको उच्छ्वासको कथा हो । खासमा यो ती कमानेहरूको सुस्केराको कथा हो, जसका सङ्घर्ष त हजार छन् । तर जिन्दगीमा चैन थोरै पनि छैन । सपना त लाखौं छन् । तर सुख अलिकति पनि छैन । उरमालभित्र थुप्रै पात्र छन् । र छन्, तिनका आआफ्ना कथा व्यथा, जसलाई उपन्यासमा यसरी उनिएको छ जसरी मालामा फूलका थुङ्गा उनिन्छ । यी पात्रका कथाभित्र पनि अनेक कथा छन्, जो आफैमा पूर्ण छन् । यीमध्ये केही कथा दशकअधिका छन् । केही ब्रिटिसकालीन समयका छन् । केही लोककथाबाट सापटी लिइएका छन् । यी कथामार्फत लेखकले चिया कमान र त्यहाँ हुने शोषणको अलिखित इतिहास भनेका छन् । कथा कोलाज झैं लाग्ने यो महत्त्वाकाङ्क्षी उपन्यास हो । यसको गहिराइ, विस्तार शिल्प र काव्यिक लयले तपाईलाई चकित पार्नेछ ।&nbsp;<br /><br /></p>",
        "inventory": 5
    },
    {
        "id": "92",
        "title": "Chirharan",
        "nepaliTitle": "चिरहरण",
        "author": "Neelam Karki Niharika",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33338906/cheerharan-r7gd1sm-w1250-o.jpg",
        "genre": "General",
        "synopsis": "<p><strong>Awards Padmashree Sahitya Puraskar, </strong></p><p><strong>2072 BS Winner Nominations Madan Puraskar, 2072 BS </strong></p><p>महाभारतको विषयमाथि थुप्रै व्याख्या&ndash;पुनव्र्याख्या हुँदै आएका छन् । चीरहरण त्यही महाभारत&ndash;कथामा केन्द्रित फरक कोणबाट लेखिएको उपन्यास हो । सत्यवतीदेखि द्रौपदीसम्म पुग्दा नारीले भोग्नुपरेका सामाजिक विवशता र हिंसामात्र होइन, धृतराष्ट्रको सिंहासनमोह, शकुनि&ndash;षड्यन्त्र अनि महायुद्ध जस्ता घटना वर्तमान समयमा पनि परिघटित छन् । कुन्तीको पुत्रत्याग होस् या द्रौपदीको चीरहरण, अहिलेको समाज पनि यस्ता विडम्बनाबाट मुक्त हुन सकेको छैन । लेखनमा नारी चेतना र अस्तित्वलाई केन्द्रमा राख्ने नीलम कार्की निहारिकाको यो उपन्यास द्वापरयुगको यस्तो ऐना हो, जसमा हामीले भोगिरहेको समाज प्रतिबिम्बित छ ।</p><p>&nbsp;</p><p>Cheerharan, centered on Daupadi the most strongest female character of Mahabharata is written in a different angle. This novel mirrors our society where woman have to go through suffering and existence of consciousness. This book is nominated for the Madan Puraskar the prestigious literary award for the year 2072 and won Padmashri Samman for 2072.</p>",
        "inventory": 3
    },
    {
        "id": "95",
        "title": "Shireeshko Phool शिरिषको फूल",
        "author": "Parijat",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33430285/shireeshko-phool-w514-o.jpg",
        "genre": "Novel,Ficton",
        "synopsis": "<p>Awards Madan Puraskar, 2022 BS Winner</p><p>Shirish Ko Phool is a novel written by prominent Nepali writer Parijat and also published in the English language as The Blue Mimosa.The novel is highly acclaimed in Nepali literature and has also been adapted in the literature curriculum of some colleges in some English speaking countries.<br /><br /></p>",
        "inventory": 2
    },
    {
        "id": "96",
        "title": "Usle Diyeko Umer",
        "nepaliTitle": "उसले दिएको उमेर",
        "author": "Buddhisagar",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33449574/usle-diyeko-umer-f-yzfaudn-w1187-o.jpg",
        "genre": "Memoir",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट आफूसित गाँसिएका स्मृतिलाई शब्दमा उतार्ने बुद्धिसागरको शैली मनमोहक छ । पुस्तक उसले दिएको उमेरमा पनि बुद्धिसागरका स्मृति पढ्दा पाठक आफ्ना पूर्वस्मृतिसम्म पुग्नेछन्- जहाँ उनीहरू नपुगेको धेरै समय भइसकेको हुन सक्छ ।एउटा मानिस यत्तिकै उमेरका खुट्किला उक्लिँदैन । उसले अनेक तीतामीठा घटनाका जङ्घार तर्नुपर्ने हुन्छ । यस पुस्तकमा पनि त्यस्तै जङ्घार छन्, जो सबै मानिससित गाँसिन्छन् । लेखकले लेखेकै छन् कतै- साइकिल सिक्दा गोडामा लागेका खत अझै छन् । सोच्छु&ndash; हरेक सिकाइका खत कहीँकतै रहिरहन्छन् । कुनै देखिन्छन्, कुनै देखिँदैनन् । यी स्मृति मात्र होइनन्, लेखकले सुनाउन चाहेका खतहरू हुन् ।</p>",
        "inventory": 3
    },
    {
        "id": "97",
        "title": "Mahabharat for kids  Rewritten",
        "nepaliTitle": "बालबालिकाका लागि महाभारत",
        "author": "Chabi Anitya",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33449584/gemini-generated-image-3gckpv3gckpv3gck-w864-o.png",
        "genre": "General",
        "synopsis": "<p>पछिल्लो बाहिरी पृष्ठबाट</p><p>बहुचर्चित महाभारत कथा बालबालिकाका लागि सरल भाषासैलीमा चित्रसहित रोचक ढंगले प्रस्तुत गरिएको छ । साहस, मित्रता र कर्तब्यको सन्देश बोकेको यस महाभारत कथाले बालबालिकालाई प्राचिन ज्ञानको रहस्य बुझ्न सघाउनेछ । बालबालिकाका लागि रमाइलो र प्रेरणादायी यस पुस्तक प्रौढ पाठकका लागि पनि पठनीय बनेको छ ।</p>",
        "inventory": 2
    },
    {
        "id": "98",
        "title": "Ramayan for Kids  Translated",
        "nepaliTitle": "बाल रामायण",
        "author": "Tikaram Sharma Rijal",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33449612/gemini-generated-image-x8ayiqx8ayiqx8ay-w864-o.png",
        "genre": "General",
        "synopsis": "<p><strong>पछिल्लो बाहिरी पृष्ठबाट</strong></p><p>सयौ वर्षदेखि लोकप्रिय रहेको रामायण एक महान धार्मिक ग्रन्थ हो । बल्मिकिद्वारा रचित रामायण संस्कृत साहित्यको पहिलो महाकाव्य मानिन्छ । सधै सत्य, निष्ठा र इमान्दारीका पक्षमा कर्तब्यनिस्थ रहेका श्रीरामको यो कथा निकै प्रेरणादायी रहेको छ । उनको पितृभक्ति साथै प्रजभाक्तिको संसारभरिनै सर्द्धा गरिन्छ</p>",
        "inventory": 2
    },
    {
        "id": "99",
        "title": "Chuli चुली",
        "author": "Sarubhakta",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33449618/chuli-f-w1321-o.jpg",
        "genre": "General",
        "synopsis": "<p>हिमाल आरोहणको इतिवृत्तभन्दा अमिल्दो नलाग्ने &lsquo;चुली&rsquo; यथार्थमा मानवीय जिगीषा र जिजीविषाहरूको साहसिक अभियानको राम्रो अभिलेख भइदिएको छ । आरोहण खतराको चुनौती स्विकार्ने साहस, सगरमाथा आरोहीको रोमाञ्चक अनुभव र अद्भुत भोगाइको सजीव आलेख रोचक छ र आकर्षक पनि । <br /><br />प्राकृतिक छवि अंकित गर्ने दृष्टिले मात्र होइन, सग।माथाको विकरालता, जोखिम, दुर्घटना, आशंकित मृत्यु आदिको अनुभूति । र दुर्लंघ्य सगरमाथाको भौगोलिकता, आरोहण वृत्तान्त, त्यस सम्बन्धी प्राविधिक ज्ञान, वायुमण्डलीय चाप, आरोहणमा प्रयोग हुने औजार, दुर्गम स्थलका नाम आदिको जानकारीले &lsquo;चुली&rsquo; एक गैरपर्वतारोहीको आरोहण लघुउपन्यास हो भनेर सायदै कसैलाई लाग्ला ।</p><p><br />\"साहित्यमा पनि सगरमाथाहरू छन् । सगरमाथाका जोखिमहरू पनि छन् । आरोहण गर्ने क्रममा चुलीहरू भेटिन्छन्, छोइन्छन् तर चुलीहरू नै साहित्यको साउथ समिट होइन । साहित्यमा त एउटा साउथ समिटपछि अर्का समिटहरू आउँछन्, जो मिटरले नापिंदैन । साहित्यको आरोहण एक आस्थाको आरोहण हो, अहम्को आरोहण हो, समर्पणको आरोहण हो, सृजनात्मकताको आरोहण हो । यी आरोहणका क्रेम्पोन पाइलाहरू मात्रै हिंडिरहनुपर्छ, उक्लिरहनुपर्छ, चुली त आफैँ नुहिदिन्छ । शिखरीय उचाइका रूपमा चुली एउटा यस्तो भव्यता हो, जो ठ्याम्मै सगरमाथा भएर देखापरेको छ । साहित्यमा सरुभक्तको आरोहण झुक्दै जाने चुलीहरूको यस्तै एउटा स्पर्श हो ।\" &ndash; कृष्णचन्द्रसिंह प्रधान</p>",
        "inventory": 2
    },
    {
        "id": "100",
        "title": "Bhagna Bhairav भग्न भैरव",
        "author": "Prollaas Sindhuliya",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33449633/bhagna-bhairav-w797-o.jpg",
        "genre": "General",
        "synopsis": "<p><strong>Nominations</strong> <br />Padmashree Sahitya Puraskar, 2079 BS</p><p>Lalbandi Nagar Wangmaya Parishad Bhasha tatha Sahitya Puraskar, 2080 BS</p><p><strong>पछिल्लो बाहिरी पृष्ठबाट </strong></p><p>कुशल हास्य-व्यङ्ग्यशिल्प भैरव अर्यालको जीवनीको आख्यानात्मक चित्रमात्र नभई यौटा पुस्ताका तपस्वी स्रष्टालाई उज्जीवित गर्ने अर्को पुस्ताका स्रष्टाको तपस्याको परीक्षाफल हो&mdash; भग्न भैरव | जीवनी र आख्यानलाई एकसाथ प्रस्तुत गरिएको नवीन ढङ्गको&nbsp; यस उपन्यासको भाषा आकर्षक र शैली मनोहारी छ ! समकालीन कविको रूपमा पृथक र प्रभावशाली छवि बनाउँदै आएका प्रोल्लास सिन्धुलीयलाई पनि यो तपसले आख्यानको राजमार्गको समर्थ धावक पक्कै साबित गरिदिनेछ |</p>",
        "inventory": 2
    },
    {
        "id": "101",
        "title": "Baikuntha Express वैकुण्ठ एक्सप्रेस",
        "author": "Mohan Raj Sharma",
        "price": 20,
        "image": "https://files.secure.website/wscfus/10720412/33449635/baikuntha-express-fjpg-w558-o.jpg",
        "genre": "General",
        "synopsis": "<p>\"'वैकुण्ठ एक्सप्रेस' नाटककार मोहनराज शर्माको त्यो नाट्यकृति हो, जसले वि.सं. २०४२ को &lsquo;मदन पुरस्कार पाउन सफल भएको थियो । मदन पुरस्कार पाउने अहिलेसम्मको एक मात्र नाट्यकृति पनि हो - &rsquo;वैकुण्ठ एक्सप्रेस' । मोहनराज शर्मा बहुमुखी प्रतिभा भएका लेखक हुनुहुन्थ्यो । उहाँले सहित्यका धेरै विधामा कलम चलाउनुभएको पाइन्छ । जहाँसम्म नाटक विधाको कुरो छ उहाँ यस विधाबारे गहिरो जानकारी राख्ने स्रष्टा हुनुहुन्थ्यो । नाट्य-मञ्च र रङ्गशिल्पबारेको उहाँको गहन ज्ञान हामी उहाँका नाटकहरूमा प्रतिफलित बनेको पाउँछौं । उहाँका नाटक मञ्चमा वा भनौ रङ्ग-प्रस्तुतिमा पुगेपछि अझ मुखर बन्ने गर्छन् । हुनलाई 'वैकुण्ठ एक्सप्रेस' पाठ्य-नाटक (Closet Play) का रूपमा पनि उत्तिकै पठनीय साथै मनोरञ्जक रहेको छ तापनि मञ्च नाटकका रूपमा समेत यो उत्तिकै सबल र उपयुक्त छ । तर अहिलेसम्म वैकुण्ठ एक्सप्रेस' नाटकमाथि नेपाली रङ्गकर्मीहरूको सुदृष्टि नपर्नु र यस्तो सशक्त नाटकको एकपटक पनि मञ्चन नहुनु भने विडम्बनापूर्ण छ । अभिव्यञ्जनावादी प्रयोगात्मक शिल्पमा संरचित नाटक 'वैकुण्ठ एक्सप्रेस' नाटककार मोहनराज शर्माको एउटा उत्कृष्ट कृति हो भन्नेमा मलाई कुनै दुविधा छैन ।\"<br />&ndash; अविनाश श्रेष्ठ</p>",
        "inventory": 2
    },
    {
        "id": "102",
        "title": "Utsarga Prem उत्सर्ग प्रेम",
        "author": "Rajeshwar Devkota",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33449637/utsarga-prem-w700-o.jpg",
        "genre": "Ficton",
        "synopsis": "<p>Awards <strong>Madan Puraskar, 2044 BS Winner</strong> <br />Gift of Love - Madan Puraskar 2044 winner written by Rajeshwar Devkota his fourth creation in writing fiction.</p>",
        "inventory": 2
    },
    {
        "id": "103",
        "title": "Sadhe Teen Hatya साढे ३ हत्या",
        "author": "Rupak Adhikari",
        "price": 15,
        "image": "https://files.secure.website/wscfus/10720412/33449644/sadhe-tin-hatya-front-cover-w509-o.jpg",
        "genre": "General",
        "synopsis": "<p>जिवनको सुन्दरता जीवन ज्युनेले मात्र बुझेको हुन्छ । लेखकले आफ्नो अनुभव सुनाउँदै भनेका छन् हामीले हार सोच्नु मात्र पनि हार्नु नै हो । र यो पुस्तक मृत्यु जित्नका लागि लेखिएको हो । आजको समयमा सबैभन्दा बढी मृत्यु सम्भवत सहि निर्णय लिन नसक्दा हुन्छ । विशेषत युबा बर्ग । हामी साना कुरामा चित्तबुझ्दो नतिजा नआएपछी जिवनको मोह त्यग्न सम्म पछि हट्दैनौं । यो पुस्तकमा बुद्धले जस्तै संदेश दिन खोजिएको छ । कसरी एउटा पात्रले आफुभित्रको नकारात्मक उर्जा शक्तीसँग लढेर जीवन ज्युने मार्गमा हिँड्छ त्यसलाईनै हत्याको आधार बनाइएको छ । प्रेम , परिवार र अरु थुप्रै कुराहरु एक एक गर्दै गुमाएको पात्रले समाजको ऐना बन्ने भुमिका निभाएको पाइन्छ । अन्त्यमा , मस्तिष्कमा आउने नराम्रा सोचको हत्या गरेर नै साढे ३ हत्या भएको छ । र यो पुस्तकले युवा बर्गमा एउटा उर्जा दिने काम अवस्य पनि गर्छ त्यसमा कुनै संदेह छैन । <br /><br />- सरोज घिमिरे ' कर्कट कश्यप ' सचिव सिस्नुपानी नेपाल <br /><strong><br />पछिल्लो बाहिरी पृष्ठबाट<br /></strong> साथीहरूले सायद सही नाम दिएका थिए \"आधा पर्व\" । त्यसैले हाम्रो जिन्दगी पनि आधा बाटोमै टुंगियो । पर्वत र म एउटै आँगनमा खेलेर बडेका थियौं । सायद बालापनको त्यो लगाव नै हाम्रो किशोरावस्थामा प्रेम बनेर बिउँझिएको थियो । ऊसँगको मेरो सम्बन्धमा कुनै हद नै&nbsp; थिएन । मेरो पहिलो पिम्पल फुटाउने देखि पहिलो रक्तस्रावको साक्षी ऊ नै थियो । मैले जीवनमा पहिलो र अन्तिम अश्लील भिडियो उसका बाबाको ल्यापटपमा कक्षा आठको जिल्ला स्तरीय परीक्षापछिको बिदामा हेरेकी थिएँ । त्यही दिन मैले आफ्नो जीवनको पहिलो चुम्बन पाएकी थिएँ । आमाले गर्नुभएको चुम्बन कहिल्यै याद छैन । म सानी थिएँ । सायद धेरै सानी जब मेरी आमाले यो दुनियाँ छाड्नुभएको थियो । <br /><br />सानीआमालाई नै मैले आमाको स्थान दिदै आएकी छु र अब पनि दिइरहने छु । तर उनी मेरी आमा नभएको कुरा हजुरआमाको मुखबाट कैयौं पटक पाहना सत्कार गर्दा सुन्ने गरेकी छु । सबैको कुरा मान्ने हो भने मेरी आमाको सन्तान मेरो भाइ मात्र हो ।<br /><br />समय बित्दै जाँदा हाको प्रेममा पर्वतले अश्लील चलचित्रमा झैँ मलाई प्रयोग गर्ने इच्छा देखायो । त्यति बेला कक्षा नौमा अध्ययनरत थियो । भखरै दसैं बिदा भएको थियो । म निकै हराएकी थिएँ । त्यसपछि कति दिनसम्म म पर्वतबाट टाढा टाढा नै भएँ ।</p>",
        "inventory": 2
    }
];
