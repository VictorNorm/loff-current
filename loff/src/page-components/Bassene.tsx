import { useState, useEffect } from "react";
import { newBaseUrl, newBaseImageUrl } from "../components/api";
import { Helmet } from "react-helmet";
import Wrapper from "../components/layout/Wrapper";
import EmployeesContainer from "../components/layout/EmployeesContainer";
import EmployeeCard from "../components/EmployeeCard";
import convertImageUrl from "../functions/convertImageUrl";
import Footer from "../components/Footer";

function Bassene() {
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  useEffect(() => {
    async function fetchBassene() {
      try {
        setIsLoading(true);
        const url = newBaseUrl + `?query=*[_type == "employee"]`;
        const response = await fetch(url);
        const data = await response.json();
        setEmployeeData(data.result);
      } catch (error) {
        setError("An error occured, try reloading the page.");
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
    <Wrapper>{error}</Wrapper>;
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
