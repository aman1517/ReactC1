import styles from "./CandidateCard.module.css";

function CandidateCard(pro) {
  const {name,rating,title,salary,company_name}=pro
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" />
      <div>
        <div>{name}</div>
        <div>{title}</div>
        <div>{rating}</div>
      </div>
      <div>{salary}
      </div>
      <div>{company_name}</div>
      
    </div>
  );
}

export default CandidateCard;
