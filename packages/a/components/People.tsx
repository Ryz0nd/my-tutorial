import styled from "@emotion/styled";
import axios from "axios";
import { useQuery } from "react-query";

const PeopleContainer = styled.div``;

type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
};

const getLuke = async (): Promise<People> => {
  const { data } = await axios("http://swapi.dev/api/people/1/");
  return data;
};

export default function People() {
  const { data } = useQuery<People>("fetchLuke", getLuke, { suspense: true });

  return (
    <PeopleContainer>
      <h1>{data?.name}</h1>
    </PeopleContainer>
  );
}
