# Multi-level Hierarchy

Tesing multi-level hierarchy by normalizing data with Redux Toolkit.

> "A JavaScript object acts like a lookup table"

data normalization အကြောင်းလေးဖတ်ပြီး စမ်းချင်လာတာနဲ့ redux toolkit နဲ့ playground လေးလုပ်ပြီး လျှောက်စမ်းထားတာလေး 😄

try ကြည့်ချင်ရင် https://multi-level-hierarchy.vercel.app/ ဒီမှာ try လို့ရပါတယ် ပြည့်တော့မပြည့်စုံပါဘူး parent တစ်ခုထက်ထားလို့ရတဲ့ bug လေးတော့ရှိပါတယ် slice သုံးခုခွဲပြီး extraReducers နဲ့ action တွေဖမ်းပြီး လုပ်ထားလို့ထင်ပါတယ်😁

စမ်းရမယ့်ပုံစံက root parent အဖြစ် Category အရင် create လုပ်ပြီးမှ အဲ့အောက်မှာ sub category တွေ todo တွေ ဖန်တီးလို့ရမှာပါ။ Sub category အောက်မှာ နောက်ထပ် sub category တွေ todo တွေ ထပ်ပြီးဖန်တီးလို့ရပါတယ်။

အဲ့မှာဆို ကြိုက်သလို စမ်းလို့ရဖို့ ကိုယ်ဖန်တီးမယ့် item အတွက် id နဲ့ ဘယ် parent အောက်မှာ ထားချင်လဲ ပြောနိုင်ဖို့အတွက် input field လေးတွေ ပေးထားပါတယ်။ ကိုယ်တိုင်ထည့်ရမှာပါဗျ။ validation တွေတော့လုပ်မထားပါဘူး

Normalize လုပ်ဖို့အတွက် rtk မှာပါတဲ့ createEntityAdapter ဆိုတဲ့ api လေးသုံးထားတာပါ

PS: UI ကိုဖြစ်သလိုရေးထားတာမို့ responsive ဖြစ်အောင်တော့ရေးမထားပါဘူး computer နဲ့စမ်းမှအဆင်ပြေမယ် ထင်ပါတယ်😁

<br><br>

![Project image](https://github.com/AKK-soft-dev/multi-level-hierarchy/blob/main/project-photo.png)

