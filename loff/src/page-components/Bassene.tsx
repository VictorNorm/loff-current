import { useState, useEffect } from "react";
import {
  baseUrl,
  baseImageUrl,
  newBaseUrl,
  newBaseImageUrl,
} from "../components/api";
import Wrapper from "../components/layout/Wrapper";
import EmployeesContainer from "../components/layout/EmployeesContainer";
import EmployeeCard from "../components/EmployeeCard";
import convertImageUrl from "../functions/convertImageUrl";
import Footer from "../components/Footer";

function Bassene() {
  const [employeeData, setEmployeeData] = useState<any[]>([]);
  const [isFetched, setIsfetched] = useState(false);
  useEffect(() => {
    async function fetchBassene() {
      const url = newBaseUrl + `?query=*[_type == "employee"]`;
      const response = await fetch(url);
      const data = await response.json();
      setEmployeeData(data.result);
      setIsfetched(true);
    }
    fetchBassene();
  }, []);
  return (
    <>
      <Wrapper>
        <h1>Bassene</h1>
        <EmployeesContainer>
          {isFetched
            ? employeeData.map((employee, index) => {
                console.log(employee, index);
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

// alt={} name={} role={} paragraph={} email={}
