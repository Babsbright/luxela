import { firestore } from "firebase-admin";
import { InitializeDb } from "../../config/firebase/config.firebase.";
import { Firestore, getFirestore } from "firebase-admin/firestore";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import CustomAPIError from "../../errors/CustomAPIError";
import { uuid } from "../../utils/helper.utils";
import { IBuyer, ISeller } from "../../Authentication/types/constant.types";

/**
 * @class UserRepo - house the query logic for he database operation
 * @public create
 * @public getUserBymail
 * @public checkExist
 * @public getSingle
 * @public getAll
 * @public update
 * @public delete
 *
 */
export class UserRepo {
  /**
   * @private db Firestore
   */
  private db: Firestore;
  /**
   * @private model firebase users collection
   * @description house the users colection for easy access in  the public functions
   */
  private model: any;

  constructor() {
    this.db = InitializeDb.getDb();
    this.model = this.db.collection("users"); // Changed from 'User' to 'users'
  }

  /**
   * @description logic for creating a seller document
   * @return seller data
   * @param payload containing the new seller data to be created
   * @throws {Error} - message: Failed to create seller account: 'error message', with 500 status code
   */
  public async createSeller(payload: Partial<ISeller>): Promise<any> {
    try {
      const data = {
        userId: uuid(),
        isVerified: false,
        ...payload,
      };
      await this.model.doc().set(data);
      const { otpCode, ...userData } = await this.getUserByMail(payload.email);
      return userData;
    } catch (error) {
      throw new CustomAPIError(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
        `Failed to create seller account: ${error.message}`,
        500
      );
    }
  }

  /**
   * @description logic for creating a buyer document
   * @return buyer data
   * @param payload containing the new buyer data to be created
   * @throws {Error} - message: Failed to create buyer account: 'error message', with 500 status code
   */
  public async createBuyer(payload: Partial<IBuyer>): Promise<any> {
    try {
      const data = {
        userId: uuid(),
        ...payload,
      };
      await this.model.doc().set(data);
      const userData = await this.getUserByMail(payload.email);
      return userData;
    } catch (error) {
      throw new CustomAPIError(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
        `Failed to create seller account: ${error.message}`,
        500
      );
    }
  }

  /**
   * @description for fetch user data with email as the identifier
   * @param email identifier for database query for specfic user data
   * @return user data and
   * @throws {Error} - message: Failed to fetch user data with status code 500
   */
  public async getUserByMail(email: string): Promise<any> {
    try {
      const snapshot = await this.model.where("email", "==", email).get();
      const userdoc = snapshot.docs[0];
      return { id: userdoc.id, ...userdoc.data() };
    } catch (error) {
      throw new CustomAPIError(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
        `Failed to fetch user data: ${error.message}`,
        500
      );
    }
  }

  /**
   * @description logic to check if user data exist in the database collection
   * @param email identifier for database query
   * @returns boolean - true: if user data exist and false: is user data does not exist
   * @throws {Error} - message: Failed to check if user exist: with status code 500
   */
  public async checkExist(email: string): Promise<any> {
    try {
      const isExist = await this.model.where("email", "==", email).get();
      if (isExist.empty) {
        return false;
      }
      return true;
    } catch (error) {
      throw new CustomAPIError(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //  @ts-ignore
        `Failed to check if user exist: ${error.message}`,
        500
      );
    }
  }

  /**
   * @description logic for fetching single user data
   * @return user data
   * @param id identifier for query database for specfic user data
   * @throws {Error} - message: Failed to fetch user data with status code 500
   */
  public async getSingle(id: string): Promise<any> {
    try {
      const snapshot = await this.model.doc(id).get();
      if (!snapshot.data()) return null;
      return { id: snapshot.id, ...snapshot.data() };
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      console.error("{Error} fetching single user:", error.message);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      throw new CustomAPIError(`Failed to fetch user: ${error.message}`, 500);
    }
  }

  /**
   * @description for fetching all user data
   * @deprecated not currently in used in this application
   */
  public async getAll(): Promise<any[]> {
    try {
      const snapshot = await this.model.get();
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      console.error("{Error} fetching all users:", error.message);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      throw new CustomAPIError(`Failed to fetch users: ${error.message}`, 500);
    }
  }

  /**
   * @description for updating user data
   * @param id identifier for user data
   * @param payload data to update with
   * @return firebase native response
   */
  public async update(id: string, payload: any): Promise<void> {
    try {
      const response = await this.model.doc(id).update(payload);
      return response;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      console.error("Error updating user:", error.message);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      throw new CustomAPIError(`Failed to update user: ${error.message}`, 500);
    }
  }

  /**
   * @description for deleting user data
   * @deprecated not currently in used in this application
   */
  public async delete(userId: string): Promise<void> {
    try {
      const response = await this.model.doc(userId).delete();
      return response;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      console.error("Error deleting user:", error.message);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      throw new CustomAPIError(`Failed to delete user: ${error.message}`, 500);
    }
  }
}
