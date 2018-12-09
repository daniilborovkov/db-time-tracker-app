import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";

import { BehaviorSubject } from 'rxjs/Rx';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { SQLitePorter } from "@ionic-native/sqlite-porter";
import { Storage } from "@ionic/storage";

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  database: SQLiteObject;
  private _databaseReady: BehaviorSubject<boolean>;

  constructor(public http: HttpClient,
    public sqliteProvider: SQLite,
    private _porter: SQLitePorter,
    private _storage: Storage,
    private _platform: Platform) {
    this._databaseReady = new BehaviorSubject(false);

    this._platform.ready().then(() => {
      this.sqliteProvider.create({
        name: 'db-meter-app.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this._storage.get('database_filled').then(val => {
          if (val) {
            this._databaseReady.next(true);
          } else { }
        })
      })
    })
  }

  fillDatabase() {
    this.http.get('assets/dummyData.sql')
      .subscribe((sql: any) => {
        this._porter.importSqlToDb(this.database, sql)
          .then(data => {
            this._databaseReady.next(true);
            this._storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }

  /**
   * Add new tag to existing
   * @param name tag otput name
   * @param color color HEX value
   */
  addTag(name, color) {
    let data = [name, color];

    return this.database.executeSql("INSERT INTO tags (name, color) values (?, ?)", data)
      .then(data => {
        return data;
      }, err => {
        console.log('Error: ' + err);
        return err;
      });
  }

  /**
   * Getting all tags
   */
  getAllTags() {
    return this.database.executeSql("SELECT * FROM tags", [])
      .then(data => {
        let tags = [];

        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            tags.push({
              name: data.rows[i].name,
              color: data.rows[i].color,
            });
          }
        }
        return tags;
      }, err => {
        console.log('Error: ' + err);
        return [];
      });
  }
}
