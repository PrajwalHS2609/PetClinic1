import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceTakeCare from "../SubServiceComponent/SubServiceTakeCare";
export default function BoardingMain() {
  return (
    <div className="subServicesMain-container">
      <div className="subServicesMain-content">
        <SubServiceComponentNav />
      </div>
      <div className="subServicesMain-content">
      <div className="subServicesMain-item">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/05/service-detail-6.webp"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            obcaecati aliquam deserunt et molestiae eum fuga inventore sed, in
            ipsa quam totam quidem dolores! Quaerat exercitationem quis a ipsa
            quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis exercitationem nesciunt sed error, quo dicta facilis
            esse fuga consequatur libero sapiente nostrum recusandae enim
            ducimus quae distinctio voluptas, sunt quasi?
          </p>
        </div>
        <SubServiceContent />
        <SubServiceTakeCare/>
      </div>
    </div>
  );
}
