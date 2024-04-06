import { ButtonComponent } from "./ButtonComponent";
export const Banner = () => {
  return (
    <div>
      <section className="banner" id="home">
        <div className="banner-content"></div>
        <div className="box">
          <p>We Crush Your Competitors, Goals, And Sales Eecords - Without The B.S.</p>
          <ButtonComponent text="Get free consultation"/>
        </div>
      </section>
    </div>
  );
};
