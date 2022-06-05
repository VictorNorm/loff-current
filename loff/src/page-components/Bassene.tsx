import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "../components/api";
import Wrapper from "../components/layout/Wrapper";
import EmployeesContainer from "../components/layout/EmployeesContainer";
import EmployeeCard from "../components/EmployeeCard";
import convertImageUrl from "../functions/convertImageUrl";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

function Bassene() {
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchBassene() {
      try {
        const url = newBaseUrl + `?query=*[_type == "employee"]`;
        const response = await fetch(url);
        const data = await response.json();
        setEmployeeData(data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBassene();
  }, []);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Helmet>
        <title>Loff | Bassene</title>
        <meta
          name="description"
          content="Les om Loffs sine ansatte, aktører, profiler, sponsorer og samarbeidspartnere."
        />
      </Helmet>
      <Wrapper>
        <h1>Bassene</h1>
        <EmployeesContainer>
          {!isLoading
            ? employeeData.map((employee, index) => {
                return (
                  <EmployeeCard
                    key={index}
                    src={
                      newBaseImageUrl +
                      convertImageUrl(employee.image.asset._ref)
                    }
                    alt={"Image of employee"}
                    name={employee.name}
                    role={employee.position}
                    paragraph={employee.excerpt}
                    instagram={employee.instagram}
                    email={employee.email}
                  />
                );
              })
            : null}
        </EmployeesContainer>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Bassene;
