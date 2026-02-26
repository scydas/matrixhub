// Copyright The MatrixHub Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package user

import (
	"context"
	"time"
)

type User struct {
	ID        string `gorm:"primarykey"`
	Username  string
	Password  string
	Email     string
	CreatedAt time.Time
	UpdatedAt time.Time
}

func (User) TableName() string {
	return "users"
}

type IUserRepo interface {
	CreateUser(ctx context.Context, user User) error
	GetUser(ctx context.Context, id string) (*User, error)
	ListUsers(ctx context.Context, page, pageSize int, search string) ([]*User, int64, error)
	DeleteUser(ctx context.Context, id string) error
}
