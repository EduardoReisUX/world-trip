import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = [
      {
        city: "Londres",
        country: "Reino Unido",
        cityImage: "londres",
        flag: "reino-unido",
      },
      {
        city: "Paris",
        country: "França",
        cityImage: "paris",
        flag: "franca",
      },
      {
        city: "Roma",
        country: "Itália",
        cityImage: "roma",
        flag: "italia",
      },
      {
        city: "Praga",
        country: "República Tcheca",
        cityImage: "praga",
        flag: "republica-tcheca",
      },
      {
        city: "Amsterdã",
        country: "Holanda",
        cityImage: "amsterda",
        flag: "holanda",
      },
    ];

    return res.status(200).json({ cities: data });
  } else {
    res.setHeader("Allow", "Post");
    res.status(405).end("Method not allowed");
  }
};
