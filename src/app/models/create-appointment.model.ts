export class CreateAppointmentModel {
  startDate: string = '';
  endDate: string = '';
  doctorId: string = '';

  // eğer daha önce kaydolmuş bir hasta varsa onun identitynumberı girince bilgileri otomatik gelecek ama yeni bir hasta ise diğer tüm bilgileri girilecek.
  patientId: string | null = null;
  firstName: string = '';
  lastName: string = '';
  identityNumber: string = '';
  city: string = '';
  town: string = '';
  fullAddress: string = '';
}
