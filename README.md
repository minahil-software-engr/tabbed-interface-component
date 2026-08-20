TASK: TABBED INTERFACE WITH 3 TABS

1. Task ka Basic Purpose

Is task ka purpose ek tabbed interface banana hai jisme 3 tabs available hain. Har tab ka apna separate content hai. Jab user kisi tab par click karta hai to us tab ka content show hota hai aur baqi tabs ka content hide ho jata hai. Is task mein display property ka use kiya gaya hai, jisme selected content ko display block aur baqi content ko display none kiya jata hai. Challenge mein active class add ki gayi hai taake currently selected tab visually highlight ho.

2. Tabbed Interface Kya Hai

Tabbed interface ek aisa interface hota hai jisme multiple buttons ya tabs hote hain aur har tab ke saath different content connected hota hai. User jis tab ko select karta hai sirf usi tab ka content screen par visible hota hai. Baqi content temporarily hidden rehta hai. Is task mein total 3 tabs hain: Tab 1, Tab 2 aur Tab 3.

3. Tabs aur Content Panels ki Mapping

Har tab ko ek specific content panel ke saath connect kiya gaya hai. Tab 1 ka connection content1 ke saath hai, Tab 2 ka content2 ke saath aur Tab 3 ka content3 ke saath. Jab user Tab 1 click karta hai to program content1 ko identify karta hai. Isi tarah Tab 2 click hone par content2 aur Tab 3 click hone par content3 select hota hai. Is mapping ki wajah se program ko pata hota hai ke kis tab ke click par kaunsa content display karna hai.

4. Content Panels

Har tab ka content ek separate div ke andar rakha gaya hai. In divs ko tab panels kaha ja sakta hai. Har panel ki apni unique id hai, jaise content1, content2 aur content3. Ye IDs JavaScript ko specific panel identify karne mein help karti hain.

5. display: block ka Role

display block ka matlab hai ke element screen par visible ho. Jab kisi selected tab ke content panel ki display property block set ki jati hai to woh content screen par show hota hai. Is task mein jis tab ko select kiya jata hai uske corresponding panel ko display block diya jata hai.

6. display: none ka Role

display none ka matlab hai ke element screen par visible nahi hoga. Element DOM mein exist karta hai lekin user ko screen par nazar nahi aata. Tab system mein display none ka use un content panels ko hide karne ke liye kiya jata hai jo currently selected nahi hain.

7. Initial Display

Page load hone par Tab 1 ka content visible hota hai. Isliye content1 ki display block hai. Baqi content2 aur content3 ki display none hai. Iska matlab hai ke starting mein sirf Tab 1 ka content user ko nazar aata hai.

8. showTab Function

showTab function tab switching ka main kaam perform karta hai. Jab user kisi tab par click karta hai to showTab function call hota hai. Is function ko tab ki ID di jati hai. Function pehle tamam panels ko hide karta hai. Phir selected tab ke corresponding panel ko display block karta hai. Is tarah ek time par sirf selected tab ka content visible hota hai.

9. Sab Panels ko Hide Karna

showTab function mein sabse pehle tamam tab panels select kiye jate hain. Phir loop ke through har panel ki display property none kar di jati hai. Iska purpose ye ensure karna hai ke pehle se visible koi doosra panel screen par na rahe. Jab sab panels hide ho jate hain to sirf selected panel ko show kiya jata hai.

10. Selected Panel ko Show Karna

Sab panels hide karne ke baad program selected tab ki ID se corresponding panel find karta hai. Agar target panel exist karta hai to uski display property block kar di jati hai. Isse selected tab ka content screen par visible ho jata hai.

11. Tab 1 par Click ki Working

Agar user Tab 1 par click karta hai to showTab function ko content1 ki ID milti hai. Function pehle content1, content2 aur content3 tino panels ko hide karta hai. Uske baad content1 ko display block kar deta hai. Result mein sirf Tab 1 ka content visible hota hai.

12. Tab 2 par Click ki Working

Agar user Tab 2 par click karta hai to function ko content2 ki ID milti hai. Pehle tamam panels hide hote hain. Phir content2 ko display block kar diya jata hai. Is wajah se Tab 2 ka content visible hota hai aur Tab 1 aur Tab 3 ka content hidden rehta hai.

13. Tab 3 par Click ki Working

Agar user Tab 3 par click karta hai to function ko content3 ki ID milti hai. Pehle tamam panels ki display none kar di jati hai. Phir content3 ki display block kar di jati hai. Is tarah sirf Tab 3 ka content visible hota hai.

14. Method 1: Display Toggle

Pehle method mein display property use ki gayi hai. Program pehle tamam content panels ki display none karta hai aur phir selected panel ki display block karta hai. Ye method simple aur easy to understand hai. Iska main concept hai ke jo content show karna ho usko block karo aur jo content hide karna ho usko none karo.

15. display Toggle ki Working

User kisi tab par click karta hai. showTab function call hota hai. Function tamam content panels select karta hai. Loop ke through tamam panels ko display none karta hai. Phir selected tab ki ID se target panel find karta hai. Target panel ko display block karta hai. Result mein sirf selected tab ka content visible hota hai.

16. Method 2: Hidden Attribute

Second method mein display property ki jagah hidden attribute use kiya gaya hai. HTML mein jin panels ko initially hide karna hai un par hidden attribute diya gaya hai. JavaScript mein panels ki hidden property ko true ya false kiya jata hai.

17. Hidden Attribute ki Working

Jab showTab function call hota hai to pehle tamam panels ki hidden property true kar di jati hai. Iska matlab tamam panels hide ho jate hain. Phir selected panel ki hidden property false kar di jati hai. Iska matlab selected panel visible ho jata hai.

18. Hidden Attribute ka Advantage

Hidden attribute ka purpose directly ye batana hai ke element currently hidden hai. Is approach mein display none aur display block manually set karne ki zaroorat nahi hoti. Code simple aur semantic ho sakta hai. Browser hidden element ko normally display nahi karta.

19. Method 3: Removing Elements

Third method mein hide karne ke bajaye current content ko container se remove kar diya jata hai. Is method mein ek content-container hota hai aur different tab contents templates mein stored hote hain. Jab user kisi tab par click karta hai to pehle container ka current content remove kiya jata hai. Phir selected template ki copy banakar container mein add kar di jati hai.

20. Template ka Role in DOM Removal

Is method mein har tab ka content template ke andar store kiya gaya hai. Tab 1 ka content tab1-content template mein, Tab 2 ka content tab2-content template mein aur Tab 3 ka content tab3-content template mein rakha gaya hai. JavaScript selected index ke according correct template select karti hai.

21. DOM Removal ki Working

User kisi tab par click karta hai. showTab function ko tab ka index milta hai. Function sabse pehle content-container ko empty karta hai. Iska matlab current content DOM se remove ho jata hai. Phir templates ki list se selected tab ka template find hota hai. Template ki copy banayi jati hai aur content-container ke andar add kar di jati hai. Is tarah screen par sirf selected tab ka content hota hai.

22. Three Methods ka Comparison

Display toggle mein content DOM mein present rehta hai lekin display none ki wajah se hidden hota hai. Selected content ko display block karke visible kiya jata hai.

Hidden attribute mein content DOM mein present rehta hai lekin hidden property ki wajah se browser usko display nahi karta.

Removing elements mein currently unwanted content ko DOM se remove kar diya jata hai aur selected content ko dobara add kiya jata hai.

Display toggle simple aur beginner-friendly hai. Hidden attribute semantic aur straightforward hai. DOM removal tab useful ho sakta hai jab sirf selected content ko DOM mein rakhna ho, lekin ismein content ko repeatedly remove aur add karna padta hai.

23. Challenge ka Basic Purpose

Challenge mein requirement hai ke currently selected tab ko visually highlight kiya jaye. Iske liye active naam ki CSS class banayi gayi hai. Jab koi tab selected hota hai to us button par active class add hoti hai. Baqi buttons se active class remove kar di jati hai. Is tarah user ko clearly pata chalta hai ke currently kaunsa tab active hai.

24. Active Class ka Role

CSS mein active class ke andar selected tab ki styling define ki gayi hai. Tumhare code mein active class ka background blue aur text white kiya gaya hai. Jab kisi button par active class hoti hai to woh button highlighted nazar aata hai.

25. Buttons se Active Class Remove Karna

Jab user new tab select karta hai to purane active tab ko inactive karna zaroori hai. Isliye program pehle tamam tab buttons select karta hai aur loop ke through un sab se active class remove karta hai. Isse ensure hota hai ke ek time par multiple tabs active na dikhain.

26. Selected Button par Active Class Add Karna

Purane buttons se active class remove karne ke baad currently clicked button par active class add ki jati hai. Iske liye event.currentTarget use kiya gaya hai. event.currentTarget us button ko represent karta hai jis par event handler attached hai. Isliye clicked tab button ko active class mil jati hai.

27. event aur currentTarget ka Role

showTab function ko event bhi receive hota hai. Event ke andar currentTarget se woh button milta hai jisne function trigger kiya. Is button par active class add ki jati hai. Is tarah program ko selected tab button identify karne mein help milti hai.

28. Challenge ki Complete Working

User page open karta hai to Tab 1 already active hota hai aur content1 visible hota hai. Jab user Tab 2 par click karta hai to pehle tamam content panels hide hote hain. Phir content2 display block hota hai. Saath hi tamam tab buttons se active class remove hoti hai aur Tab 2 button par active class add ho jati hai. Is wajah se Tab 2 ka content show hota hai aur Tab 2 button highlighted nazar aata hai.

29. Logic First

Is task ka basic logic ye hai ke har tab ko ek unique content panel ke saath map kiya jaye. Jab tab click ho to pehle tamam panels ko hide kiya jaye. Phir selected tab ke corresponding panel ko show kiya jaye. Challenge mein isi waqt tamam buttons se active class remove karke selected button par active class add ki jati hai. Is tarah content visibility aur active tab dono ek saath update hote hain.

30. Complete Task ka Overall Flow

Page par 3 tabs aur 3 content panels hain. Har tab ka ek corresponding content panel hai. Initially sirf Tab 1 ka content visible hai. User jab kisi tab par click karta hai to showTab function execute hota hai. Function tamam panels ko hide karta hai aur selected panel ko display block karta hai. Challenge mein function tamam buttons se active class remove karta hai aur clicked button par active class add karta hai. Is tarah selected tab ka content visible hota hai aur selected tab visually highlighted hota hai.

