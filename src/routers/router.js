const router = require("express").Router();

const userControllers = require("../controllers/usersController");
const roomControllers = require("../controllers/roomsController");
const taskControllers = require("../controllers/tasksController");

/**
 * @swagger
 * tags:
 *   - name: Rooms
 *     description: Room management
 */

/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Tüm odaları getir
 *     tags: [Rooms]
 *     responses:
 *       200:
 *         description: Başarılı
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   roomId:
 *                     type: integer
 *                   start:
 *                     type: boolean
 *                   end:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get("/rooms", roomControllers.getAllRooms);

/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: Belirli bir odayı getir
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Oda ID'si
 *     responses:
 *       200:
 *         description: Başarılı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 roomId:
 *                   type: integer
 *                 start:
 *                   type: boolean
 *                 end:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.get("/rooms/:id", roomControllers.getRoomByID);

/**
 * @swagger
 * /rooms:
 *   post:
 *     summary: Yeni bir oda oluştur
 *     tags: [Rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: integer
 *               start:
 *                 type: boolean
 *               end:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Oda oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 roomId:
 *                   type: integer
 *                 start:
 *                   type: boolean
 *                 end:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.post("/rooms", roomControllers.postNewRoom);

/**
 * @swagger
 * /rooms/{id}:
 *   patch:
 *     summary: Odayı güncelle (partial update)
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Oda ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: integer
 *               start:
 *                 type: boolean
 *               end:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Oda güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 roomId:
 *                   type: integer
 *                 start:
 *                   type: boolean
 *                 end:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.patch("/rooms/:id", roomControllers.updatePatchRoom);

/**
 * @swagger
 * /rooms/{id}:
 *   put:
 *     summary: Odayı tamamen güncelle
 *     tags: [Rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Oda ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               roomId:
 *                 type: integer
 *               start:
 *                 type: boolean
 *               end:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Oda güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 roomId:
 *                   type: integer
 *                 start:
 *                   type: boolean
 *                 end:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.put("/rooms/:id", roomControllers.updatePutRoom);


/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: User management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Tüm kullanıcıları getir
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Başarılı
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   nickname:
 *                     type: string
 *                   userRoomId:
 *                     type: integer
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get("/users", userControllers.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Belirli bir kullanıcıyı getir
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Kullanıcı ID'si
 *     responses:
 *       200:
 *         description: Başarılı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 nickname:
 *                   type: string
 *                 userRoomId:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.get("/users/:id", userControllers.getUserByID);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Yeni bir kullanıcı oluştur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               userRoomId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Kullanıcı oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 nickname:
 *                   type: string
 *                 userRoomId:
 *                   type: integer
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.post("/users", userControllers.postNewUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Belirli bir kullanıcıyı sil
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Kullanıcı ID'si
 *     responses:
 *       200:
 *         description: Kullanıcı silindi
 */
router.delete("/users/:id", userControllers.deleteUser);

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Kullanıcıyı güncelle (partial update)
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Kullanıcı ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               userRoomId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Kullanıcı güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 nickname:
 *                   type: string
 *                 userRoomId:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.patch("/users/:id", userControllers.updatePatchUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Kullanıcıyı tamamen güncelle
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Kullanıcı ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               userRoomId:
 *                 type: number
 *     responses:
 *       200:
 *         description: Kullanıcı güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 nickname:
 *                   type: string
 *                 userRoomId:
 *                   type: number
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.put("/users/:id", userControllers.updatePutUser);


/**
 * @swagger
 * tags:
 *   - name: Tasks
 *     description: Task management
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Tüm görevleri getir
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Başarılı
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: [pending, in-progress, completed]
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
router.get("/tasks", taskControllers.getAllTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Belirli bir görevi getir
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Görev ID'si
 *     responses:
 *       200:
 *         description: Başarılı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: [pending, in-progress, completed]
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.get("/tasks/:id", taskControllers.getTaskByID);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Yeni bir görev oluştur
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               userId:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, completed]
 *     responses:
 *       201:
 *         description: Görev oluşturuldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: [pending, in-progress, completed]
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.post("/tasks", taskControllers.postNewTask);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Belirli bir görevi sil
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Görev ID'si
 *     responses:
 *       200:
 *         description: Görev silindi
 */
router.delete("/tasks/:id", taskControllers.deleteTask);

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Görevi güncelle (partial update)
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Görev ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, completed]
 *     responses:
 *       200:
 *         description: Görev güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: [pending, in-progress, completed]
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.patch("/tasks/:id", taskControllers.updatePatchTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Görevi tamamen güncelle
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Görev ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               userId:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, completed]
 *     responses:
 *       200:
 *         description: Görev güncellendi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: [pending, in-progress, completed]
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 */
router.put("/tasks/:id", taskControllers.updatePutTask);



module.exports = router;
