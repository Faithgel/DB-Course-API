import { Router } from 'express';
import { getCompanies, getCompany, createCompany, updateCompany, deleteCompany } from '../controllers/company.controller';

const router = Router();

router.get('/companies', getCompanies);
router.get('/companies/:rutEmpresa', getCompany);
router.post('/companies/:rutEmpresa', createCompany);
router.put('/companies/:rutEmpresa', updateCompany);
router.delete('/companies/:rutEmpresa', deleteCompany);

export default router;
