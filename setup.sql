-- psql -U $USERNAME -f setup.sql
CREATE DATABASE requestbin;
\c requestbin

CREATE TABLE basket (
  endpoint_id text PRIMARY KEY,
  total_request INTEGER DEFAULT 0
);

CREATE TABLE request (
  id SERIAL PRIMARY KEY,
  basket_endpoint_id text NOT NULL REFERENCES basket (endpoint_id) ON DELETE CASCADE,
  method text NOT NULL,
  header text NOT NULL,
  time_stamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  mongodb_path text
);