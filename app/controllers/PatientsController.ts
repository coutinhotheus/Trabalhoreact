import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';
import Patients from '../models/Patients';
import uploadConfig from '../../config/upload';

interface Request {
  name: string;
  city: string;
  cpf: string;
  email: string;
  telephone: string;
  picture: string;
}

interface Update {
  id: string;
  name?: string;
  city?: string;
  cpf?: string;
  email?: string;
  telephone?: string;
  picture?: string;
}

class PatientsController {
  public async store({
    name,
    city,
    cpf,
    email,
    telephone,
    picture,
  }: Request): Promise<Patients> {
    const PatientsRepository = getRepository(Patients);

    const ChecarEmail = await PatientsRepository.findOne({
      where: { email },
    });

    if (ChecarEmail) {
      throw new Error('Medico já cadastrado');
    }

    const patients = PatientsRepository.create({
      name,
      city,
      cpf,
      email,
      telephone,
      picture,
    });

    await PatientsRepository.save(patients);
    return patients;
  }

  public async update({
    name,
    city,
    cpf,
    email,
    telephone,
    picture,
  }: Update): Promise<Patients> {
    const PatientsRepository = getRepository(Patients);

    const patients = await PatientsRepository.findOne(id);

    if (!patients) {
      throw new Error('Funcionario não encontrado');
    }
    if (patients.picture) {
      const pictureFilePath = path.join(
        uploadConfig.directory,
        patients.picture,
      );
      const pictureExists = await fs.promises.stat(pictureFilePath);
      if (pictureExists) {
        await fs.promises.unlink(pictureFilePath);
      }
    }

    if (name) {
      patients.name = name;
    }
    if (city) {
      patients.city = city;
    }
    if (cpf) {
      patients.cpf = cpf;
    }
    if (email) {
      patients.email = email;
    }
    if (telephone) {
      patients.telephone = telephone;
    }
    if (picture) {
      patients.picture = picture;
    }

    await PatientsRepository.save(patients);
    return patients;
  }
}

export default PatientsController;
