"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Centre_1 = require("../models/Centre");
module.exports = {
    up: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        const centres = [
            {
                name: 'Sunrise Hospital',
                image: 'sunrise_hospital.jpg',
                regNo: 'REG1001',
                dateOfEst: '2005-08-15',
                address: '12 Sunrise Street',
                city: 'Lagos',
                state: 'Lagos',
                country: 'Nigeria',
                about: 'A state-of-the-art hospital offering 24/7 emergency care.',
                phone: '08012345678',
                telephone: '0123456789',
                website: 'www.sunrisehospital.com',
                emergencyPhone: '08098765432',
                type: Centre_1.FacilityType.HOSPITAL,
                category: Centre_1.FacilityCategory.PRIVATE,
                userId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Greenfield Clinic',
                image: 'greenfield_clinic.jpg',
                regNo: 'REG1002',
                dateOfEst: '2012-03-22',
                address: '45 Green Avenue',
                city: 'Abuja',
                state: 'FCT',
                country: 'Nigeria',
                about: 'Providing quality outpatient care and wellness programs.',
                phone: '08023456789',
                telephone: '0123456790',
                website: 'www.greenfieldclinic.com',
                emergencyPhone: '08087654321',
                type: Centre_1.FacilityType.CLINIC,
                category: Centre_1.FacilityCategory.PUBLIC,
                userId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'MediCare Pharmacy',
                image: 'medicare_pharmacy.jpg',
                regNo: 'REG1003',
                dateOfEst: '2018-07-10',
                address: '89 Pharma Road',
                city: 'Kano',
                state: 'Kano',
                country: 'Nigeria',
                about: 'A trusted provider of pharmaceutical products and consultation.',
                phone: '08034567890',
                telephone: '0123456781',
                website: 'www.medicarepharmacy.com',
                emergencyPhone: '08076543210',
                type: Centre_1.FacilityType.PHARMACY,
                category: Centre_1.FacilityCategory.NGO,
                userId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Precision Lab Services',
                image: 'precision_lab.jpg',
                regNo: 'REG1004',
                dateOfEst: '2015-11-30',
                address: '23 Laboratory Lane',
                city: 'Port Harcourt',
                state: 'Rivers',
                country: 'Nigeria',
                about: 'Providing accurate and efficient laboratory testing services.',
                phone: '08045678901',
                telephone: '0123456782',
                website: 'www.precisionlab.com',
                emergencyPhone: '08065432109',
                type: Centre_1.FacilityType.LAB,
                category: Centre_1.FacilityCategory.MISSIONARY,
                userId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Elite Diagnostics',
                image: 'elite_diagnostics.jpg',
                regNo: 'REG1005',
                dateOfEst: '2019-09-18',
                address: '67 Scan Avenue',
                city: 'Enugu',
                state: 'Enugu',
                country: 'Nigeria',
                about: 'Specialized in advanced imaging and diagnostic services.',
                phone: '08056789012',
                telephone: '0123456783',
                website: 'www.elitediagnostics.com',
                emergencyPhone: '08054321098',
                type: Centre_1.FacilityType.DIAGNOSTIC,
                category: Centre_1.FacilityCategory.PRIVATE,
                userId: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ];
        yield queryInterface.bulkInsert('centres', centres);
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('centres', {});
    }),
};
