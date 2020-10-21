import { Request, Response } from "express";
import { getRepository } from "typeorm";
import userView from "../views/users_view";
import * as Yup from "yup";

import User from "../models/User";

export default {
  async index(request: Request, response: Response) {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    return response.json(userView.renderMany(users));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(User);
    const orphanage = await orphanagesRepository.findOneOrFail(id);

    return response.json(userView.render(orphanage));
  },

  async create(request: Request, response: Response) {
    const { name, email, password_hash } = request.body;

    const usersRepository = getRepository(User);

    const data = {
      name,
      email,
      password_hash,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password_hash: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = usersRepository.create(data);

    await usersRepository.save(orphanage);

    return response.status(201).json(orphanage);
  },
};
