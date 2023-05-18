import React from "react";

export default function Joke({ setup, punchline, num }) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((preValue) => !preValue);
  }
  return (
    // <div className="joke">
    //     <span>{num}</span>
    //   {setup && <p>{setup}</p>}
    //   { isShown && <h1>{punchline}</h1>}
    //   <button onClick={toggleShown}>{isShown ? 'Hide' : 'Show'}  Joke</button>
    // </div>
    <div className="container">
      <div className="hbd">
        <h1> ❤️كل عام وأنتي بخير حبيبتي أبرار</h1>
        {isShown && (
          <div>
            <p>
    مجدداً يحبيبتي وملكتي ومليكة قلبي بتوو،
اكملتي ربيعك الرابع والعشرين، أنتي زهرة دوار شمس انيقة تكملين ربيعا بعد الآخر مزداهة طوال العام، وردة حمراء تسر الناظرين وتزيد العشاق حُباً، زهرة نرجس او حقل نرجس يعطر الارجاء اينما حلّ ورحل، أم انتي الربيع نفسه متجددة في كل الاعوام تزهرين كل ما حولك.
اكتب لك وكلي استياء لرغبتي بأن اكون الى جنبك في بداية عامك الجديد لكنها الظروف الطاحنة والقاسية هاهي الان تقسو علي وعلى قلبي لكنني وعلى الاقل بإذن الله واثناء قراءتك لهذه الرساله سأكون تحدثت معك هاتفيا وهنأتك على العام الجديد يازهرتي ونوارة حياتي.
اتمنى لك السعادة ياحبيبتي في العام الجديد سعادة أبدية لا يفارق فيها تبسمك وابتسامك شفتيك اليانعتين ووجهك الآسر لي على الدوام. سعادة لا يتخللها الحزن والضيق تهيج الحساد ولا يحسدونك عليها، لا حزن ولا الم يلاقيك فيها لانك لا تشبهينهما بل يشبهك كل ما هو جميل كما اذكرك دوما عندما ارى القمر او غروب الشمس او زهرة متفتحة او هدف النصر لمانشستر يونايتد في الدقيقة التسعين هههه. 
كل عام وانتي بخير كل عام وانتي مرتاحة البال صافية الذهن وراضية تمام الرضا وفرحة يا فرحتي يا ابرار صاحبة اجمل الاسماء، يا بتو حبيبتي ورفيقتي كما اتمناك في كل الاعوام واتمنى ان ارافقك في جميع اعوامك القادمة يا بهجتي و سروري، رافقك كل ما هو جميل ودعائي معك الذي يحمل في طياته اجمل الامنيات والرجاءات التي سأحتفظ لك بها دون ان ابوح بها الان لكن تيقني بأنها كلها خير لك يا كل الخير. أحبك بعدد السنين الماضية والاعوام القادمة، أحبك هذا العام، والعام القادم وكل الاعوام يا حُبي. ❤️

-مُحِبّك للأبد

            </p>
            <a
              href="https://heyzine.com/flip-book/6bd6fc7386.html"
              id="heart"
              class="button"
            > </a>
          </div>
        )}
        <button onClick={toggleShown}>{isShown ? "أخفي" : "أضغط ❤️"}</button>
      </div>
    </div>
  );
}
