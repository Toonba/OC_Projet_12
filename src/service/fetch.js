import { useState, UseEffect } from 'react'

export async function FetchMainData(url) {
  const response = await fetch(url)
  if (response.ok === true) {
    return response.json()
  }
  throw new Error('Impossible de contacter le serveur')
}