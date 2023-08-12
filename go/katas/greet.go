package katas

import "fmt"

func Greet(name string) string {
  if name == "Johnny" {
    return fmt.Sprintf("Hello, my love!")
  }
  return fmt.Sprintf("Hello, %v!", name)
}