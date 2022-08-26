import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import { afterEach, vitest } from "vitest";
import { ListItem } from "../src/components/Card/ListItem";
import { AuthContextProvider } from "../src/context/AuthContext";

afterEach(() => {
  cleanup();
});

const articles = [
  {
    author: {
      email: "some@email.com",
      familyName: "Some name",
      givenName: "A name",
      googleId: "1829181830918239",
      imageUrl: "https://a-url.com",
      name: "A name",
    },
    createdAt: "2022-08-18T00:11:35.379Z",
    text: "          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolor culpa ab deserunt aspernatur dignissimos dolorum quibusdam quo distinctio doloremque sit fugiat ratione modi, excepturi incidunt nulla. A, laboriosam quidem.\n          Accusantium dolore non natus eligendi doloribus totam molestiae perspiciatis voluptatem tempore, illum voluptatibus rerum commodi et laborum eaque iusto excepturi distinctio id pariatur quas voluptas repudiandae. Dolorem eum numquam accusamus!\n          Ipsa dolore autem nesciunt quasi illum alias dolor nobis ipsam quas nihil! Dignissimos eveniet quos officiis adipisci? Harum voluptas provident delectus ea incidunt, beatae ipsum eaque officia error, inventore sunt.\n          Hic totam eaque sed, natus, iusto aliquam animi vitae saepe ad ut dolor laudantium quidem magnam necessitatibus rerum harum distinctio eum fugit eligendi! Eius ipsum maxime sed ipsa aliquam esse!\n          Atque laboriosam quisquam est suscipit enim delectus voluptates obcaecati vel itaque? Dolorum ducimus, libero molestiae exercitationem natus recusandae aspernatur maiores, obcaecati repudiandae aperiam repellat quo expedita minus aliquam. Laboriosam, eius?\n          Fugit unde explicabo quas quam. Vero porro tenetur aperiam exercitationem sunt aspernatur ut blanditiis ullam soluta velit quas nisi illo, obcaecati laudantium aliquid nulla dolore quam debitis odit? Praesentium, dolores?\n          Praesentium tempora perspiciatis quae maxime. Commodi doloribus quas perspiciatis nobis libero aliquid perferendis explicabo iure rerum distinctio quibusdam veniam odio unde facilis, minima, praesentium ipsa debitis eum itaque! Commodi, illo.\n          Quia veritatis dolorem vero eius dignissimos, tenetur facilis porro id assumenda reiciendis asperiores similique esse repellendus necessitatibus enim dicta libero delectus labore consequatur est voluptatem. Deserunt nemo mollitia minus animi!",
    title: "opa",
    _id: "j13ruth921r398q",
  },
  {
    author: {
      email: "email@email.com",
      familyName: "None name",
      givenName: "None name",
      googleId: "21840589381",
      imageUrl: "https://a-url2.com",
      name: "A fake name",
    },
    createdAt: "2022-07-20T00:11:35.379Z",
    text: "          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolor culpa ab deserunt aspernatur dignissimos dolorum quibusdam quo distinctio doloremque sit fugiat ratione modi, excepturi incidunt nulla. A, laboriosam quidem.\n          Accusantium dolore non natus eligendi doloribus totam molestiae perspiciatis voluptatem tempore, illum voluptatibus rerum commodi et laborum eaque iusto excepturi distinctio id pariatur quas voluptas repudiandae. Dolorem eum numquam accusamus!\n          Ipsa dolore autem nesciunt quasi illum alias dolor nobis ipsam quas nihil! Dignissimos eveniet quos officiis adipisci? Harum voluptas provident delectus ea incidunt, beatae ipsum eaque officia error, inventore sunt.\n          Hic totam eaque sed, natus, iusto aliquam animi vitae saepe ad ut dolor laudantium quidem magnam necessitatibus rerum harum distinctio eum fugit eligendi! Eius ipsum maxime sed ipsa aliquam esse!\n          Atque laboriosam quisquam est suscipit enim delectus voluptates obcaecati vel itaque? Dolorum ducimus, libero molestiae exercitationem natus recusandae aspernatur maiores, obcaecati repudiandae aperiam repellat quo expedita minus aliquam. Laboriosam, eius?\n          Fugit unde explicabo quas quam. Vero porro tenetur aperiam exercitationem sunt aspernatur ut blanditiis ullam soluta velit quas nisi illo, obcaecati laudantium aliquid nulla dolore quam debitis odit? Praesentium, dolores?\n          Praesentium tempora perspiciatis quae maxime. Commodi doloribus quas perspiciatis nobis libero aliquid perferendis explicabo iure rerum distinctio quibusdam veniam odio unde facilis, minima, praesentium ipsa debitis eum itaque! Commodi, illo.\n          Quia veritatis dolorem vero eius dignissimos, tenetur facilis porro id assumenda reiciendis asperiores similique esse repellendus necessitatibus enim dicta libero delectus labore consequatur est voluptatem. Deserunt nemo mollitia minus animi!",
    title: "A title",
    _id: "sjdqh7418401t501",
  },
];

describe("ListItem component test", () => {
  it("Renders ListItem component for every article", () => {
    const { container } = render(
      <AuthContextProvider>
        {articles.map((article) => (
          <ListItem key={article._id} article={article} />
        ))}
      </AuthContextProvider>
    );
    const containerLength = container.childElementCount;
    expect(containerLength).toEqual(articles.length);
  });
});
