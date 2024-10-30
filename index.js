const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const data = {
    "users": [
      {
        "id": 1,
        "username": "admin",
        "first_name": "Javier",
        "last_name": "Roque",
        "email": "m@gmail.com",
        "phone": "1234567890",
        "register_date": "2024-01-01",
        "company": "Example Corp",
        "password": "admin"
      },
      {
        "id": 2,
        "username": "hola",
        "first_name": "Jesus",
        "last_name": "Uribe",
        "email": "jesus@gmail.com",
        "phone": "default",
        "register_date": "default",
        "company": "default",
        "password": "123"
      },
      {
        "id": 3,
        "username": "b",
        "first_name": "default",
        "last_name": "default",
        "email": "b",
        "phone": "default",
        "register_date": "default",
        "company": "default",
        "password": "321"
      },
      {
        "id": 4,
        "username": "test",
        "first_name": "default",
        "last_name": "default",
        "email": "test@g.com",
        "phone": "default",
        "register_date": "default",
        "company": "default",
        "password": "12345678"
      }
    ],
    "subscriptions": [
      {
        "id": 1,
        "name": "Basic Subscription",
        "description": "Limited access"
      },
      {
        "id": 2,
        "name": "Premium Subscription",
        "description": "Full access"
      }
    ],
    "subscriptions_users": [
      {
        "id": 1,
        "user_id": 1
      },
      {
        "id": 2,
        "user_id": 1
      }
    ],
    "dentists": [
      {
        "id": 12345678,
        "first_name": "Smith",
        "last_name": "Johnson",
        "specialty": "Orthodontics",
        "experience": 10,
        "phone": "987654321",
        "email": "drsmith@example.com",
        "total_appointments": 100,
        "user_id": 1
      },
      {
        "id": 87654321,
        "first_name": "Alice",
        "last_name": "Williams",
        "specialty": "Endodontics",
        "experience": 8,
        "phone": "123987654",
        "email": "dralice@example.com",
        "total_appointments": 200,
        "user_id": 1
      },
      {
        "id": 13579246,
        "first_name": "Gregory",
        "last_name": "House",
        "specialty": "Dentist",
        "experience": 10,
        "phone": "111111888",
        "email": "example@a.com",
        "total_appointments": 0,
        "user_id": 2
      },
      {
        "id": 21212121,
        "first_name": "Juan",
        "last_name": "Perez",
        "specialty": "Odontologia",
        "experience": 2,
        "phone": "912567892",
        "email": "juan@gmail.com",
        "total_appointments": 0,
        "user_id": 1
      }
    ],
    "schedule_dentists": [
      {
        "id": 1,
        "dentist_id": 12345678,
        "weekday": "Monday",
        "start_time": "10:00",
        "end_time": "11:00",
        "date": "2024-10-21",
        "user_id": 1
      },
      {
        "id": 2,
        "dentist_id": 12345678,
        "weekday": "Monday",
        "start_time": "14:00",
        "end_time": "15:00",
        "date": "2024-10-21",
        "user_id": 1
      },
      {
        "id": 3,
        "dentist_id": 87654321,
        "weekday": "Monday",
        "start_time": "16:00",
        "end_time": "17:00",
        "date": "2024-10-21",
        "user_id": 1
      },
      {
        "id": 4,
        "dentist_id": 87654321,
        "weekday": "Friday",
        "start_time": "9:00",
        "end_time": "11:00",
        "date": "2024-10-25",
        "user_id": 1
      }
    ],
    "inventory": [
      {
        "id": 1,
        "material_name": "Gloves",
        "quantity": 100,
        "unit_price": 5.5,
        "last_updated": "2024-01-01",
        "user_id": 1
      },
      {
        "id": 2,
        "material_name": "Masks",
        "quantity": 200,
        "unit_price": 2.5,
        "last_updated": "2024-01-05",
        "user_id": 2
      }
    ],
    "patients": [
      {
        "id": 123456789,
        "clinical_record_id": 1,
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "jane@example.com",
        "age": 30,
        "medical_history": "None",
        "birth_date": "1994-05-15",
        "appointment_id": 1,
        "user_id": 1
      },
      {
        "id": 7777777,
        "clinical_record_id": 1,
        "first_name": "Roman",
        "last_name": "Reigns",
        "email": "reigns@example.com",
        "age": 40,
        "medical_history": "None",
        "birth_date": "1970-08-15",
        "appointment_id": 658322,
        "user_id": 1
      },
      {
        "id": 98765432,
        "clinical_record_id": 2,
        "first_name": "Emily",
        "last_name": "Clark",
        "email": "emily@example.com",
        "age": 25,
        "medical_history": "None",
        "birth_date": "1998-02-20",
        "appointment_id": 3,
        "user_id": 2
      },
      {
        "id": 24681357,
        "clinical_record_id": 3,
        "first_name": "Mark",
        "last_name": "Baker",
        "email": "mark@example.com",
        "age": 35,
        "medical_history": "Diabetes",
        "birth_date": "1989-11-02",
        "appointment_id": 4,
        "user_id": 3
      },
      {
        "id": 844739,
        "clinical_record_id": 767596,
        "first_name": "Enzo",
        "last_name": "Fernandez",
        "email": "enzo",
        "age": "24",
        "medical_history": "None",
        "birth_date": "2024-10-08T17:47",
        "appointment_id": null,
        "user_id": 1
      },
      {
        "id": 968869,
        "clinical_record_id": 872445,
        "first_name": "Enzo",
        "last_name": "Fernandez",
        "email": "enzo@gmail.com",
        "age": "24",
        "medical_history": "None",
        "birth_date": "2024-10-07T17:50",
        "appointment_id": null,
        "user_id": 1
      }
    ],
    "clinical_records": [
      {
        "id": 1,
        "medical_history": "No allergies",
        "record_date": "2024-01-10",
        "diagnosis": "General check-up",
        "treatment": "None",
        "user_id": 1
      },
      {
        "id": 767596,
        "medical_history": "None",
        "record_date": "2024-10-23T17:47",
        "diagnosis": "None",
        "treatment": "None",
        "user_id": 1
      },
      {
        "id": 872445,
        "medical_history": "None",
        "record_date": "2024-11-01T17:50",
        "diagnosis": "None",
        "treatment": "None",
        "user_id": 1
      }
    ],
    "clinical_exam": [
      {
        "id": 1,
        "exam_id": 1
      }
    ],
    "exams": [
      {
        "id": 1,
        "description": "Dental X-ray",
        "image_path": "/images/xray1.jpg"
      }
    ],
    "appointments": [
      {
        "id": 1,
        "dentist_dni": 12345678,
        "user_id": 1,
        "appointment_date": "2024-01-15T10:00:00",
        "reason": "General check-up",
        "completed": false,
        "reminder_sent": true,
        "duration_minutes": 30,
        "payment_id": 1,
        "payment_status": true
      },
      {
        "id": 2,
        "dentist_dni": 87654321,
        "user_id": 1,
        "appointment_date": "2024-09-30T09:00:00",
        "reason": "Root Canal Treatment",
        "completed": false,
        "reminder_sent": false,
        "duration_minutes": 60,
        "payment_id": 3,
        "payment_status": true
      },
      {
        "id": 3,
        "dentist_dni": 13579246,
        "user_id": 2,
        "appointment_date": "2024-09-30T11:00:00",
        "reason": "Gum Disease Treatment",
        "completed": false,
        "reminder_sent": false,
        "duration_minutes": 45,
        "payment_id": null,
        "payment_status": false
      },
      {
        "id": 658322,
        "dentist_dni": 21212121,
        "user_id": 1,
        "appointment_date": "2024-10-10T17:43",
        "reason": "CheckUp",
        "completed": false,
        "reminder_sent": false,
        "duration_minutes": 15,
        "payment_id": null,
        "payment_status": false
      }
    ],
    "payments": [
      {
        "amount": "",
        "payment_date": "2024-10-12T18:11:10.714Z",
        "id": 1
      },
      {
        "amount": "",
        "payment_date": "2024-10-26T20:11:52.195Z",
        "id": 2
      },
      {
        "amount": null,
        "payment_date": "2024-10-26T20:18:00.572Z",
        "id": 3
      }
    ],
    "payment_methods": [
      {
        "id": 1,
        "name": "Credit Card"
      },
      {
        "id": 2,
        "name": "PayPal"
      }
    ],
    "payment_method_relation": [
      {
        "id": 1,
        "payment_method_id": 1
      },
      {
        "id": 2,
        "payment_method_id": 1
      },
      {
        "id": 3,
        "payment_method_id": 2
      }
    ],
    "schedules": [
      {
        "id": 1,
        "dentist_dni": 12345678,
        "weekday": "Monday",
        "start_time": "09:00",
        "end_time": "17:00",
        "user_id": 1
      }
    ],
    "support-message": [
      {
        "id": 1,
        "name": "Jose",
        "email": "example@gmail.com",
        "description": "",
        "user_id": "1"
      }
    ]
};

app.get('/api', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});