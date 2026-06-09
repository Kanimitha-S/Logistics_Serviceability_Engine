# Logistics Serviceability Engine

## Overview

A backend service that determines whether a shipment can be delivered between two PIN codes and classifies the movement based on predefined business rules.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Swagger

## Project Structure

src
├── config
├── controllers
├── routes
├── services
├── repositories
├── middleware
├── utils
├── docs

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd logistics-serviceability-engine
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=logistics_db
```

### Start Server

```bash
npm run dev
```

## API Documentation

Swagger UI:

http://localhost:3000/api-docs

## APIs

### Get Pincode Details

GET /api/pincode/:pincode

### Check Serviceability

POST /api/serviceability/check

Request:

```json
{
  "origin_pincode": "515001",
  "destination_pincode": "560001"
}
```
### Check Bulk Serviceability

POST /api/serviceability/bulk

Request:

```json
{
 "origin_pincode": "600001",
 "destination_pincodes": [
 "560001",
 "110001",
 "744101"
 ]
}
```

### CSV Upload API 

POST /api/pincode/upload



## Business Rules

1. Invalid Pincode
2. Not Serviceable
3. Special Destination
4. Within State
5. Within Zone
6. Rest Of India